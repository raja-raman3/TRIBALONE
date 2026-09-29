/**
 * TRIBALONE - Smart Document Validation Engine
 * Simulates OCR Extraction & Automated Data Source Cross-Matching
 * Evaluates Profile Data vs Document Claims and routes discrepancies to Manual Review Queue
 */

export function validateDocument(student, docType, certData) {
  const result = {
    docType,
    validatedAt: new Date().toISOString(),
    matchStatus: 'MATCHED', // 'MATCHED' | 'MISMATCH' | 'EXPIRED' | 'UNREADABLE'
    confidence: 0.98,
    discrepancyDetails: null,
    routedTo: 'AUTOMATED_CLEARANCE',
    extractedFields: {}
  };

  switch (docType) {
    case 'INCOME_CERT': {
      const declaredIncome = Number(student.familyIncome);
      const certificateIncome = Number(certData.income || declaredIncome);
      const expiry = certData.expiryDate ? new Date(certData.expiryDate) : new Date('2026-09-15');
      const now = new Date('2026-09-24T12:00:00');

      result.extractedFields = {
        issuingAuthority: certData.authority || 'Tahsildar, Revenue Dept',
        certificateNumber: certData.certNumber || 'TNIC2026THN88190',
        statedAnnualIncome: certificateIncome,
        profileStatedIncome: declaredIncome,
        issueDate: certData.issueDate || '2026-05-10',
        expiryDate: certData.expiryDate || '2027-05-09'
      };

      if (expiry < now) {
        result.matchStatus = 'EXPIRED';
        result.confidence = 0.99;
        result.discrepancyDetails = `Certificate expired on ${expiry.toLocaleDateString('en-GB')}. Renewal required.`;
        result.routedTo = 'DEFICIENCY_NOTICE';
      } else if (Math.abs(certificateIncome - declaredIncome) > 1000) {
        result.matchStatus = 'MISMATCH';
        result.confidence = 0.85;
        result.discrepancyDetails = `Profile income (₹${declaredIncome.toLocaleString('en-IN')}) does not match Certificate stated income (₹${certificateIncome.toLocaleString('en-IN')}). Discrepancy: ₹${Math.abs(certificateIncome - declaredIncome).toLocaleString('en-IN')}.`;
        result.routedTo = 'MANUAL_REVIEW_QUEUE';
      } else {
        result.matchStatus = 'MATCHED';
        result.confidence = 0.99;
        result.discrepancyDetails = `Income verified ₹${certificateIncome.toLocaleString('en-IN')} matches profile data exactly.`;
        result.routedTo = 'STATE_NODAL_CLEARANCE';
      }
      break;
    }

    case 'ST_CERT': {
      const studentSubTribe = (student.stSubTribe || '').toLowerCase();
      const certSubTribe = (certData.subTribe || student.stSubTribe || '').toLowerCase();

      result.extractedFields = {
        communityName: certData.community || 'Scheduled Tribe',
        subTribe: certData.subTribe || student.stSubTribe,
        certificateNumber: certData.certNumber || 'TNST2019THN04512',
        barcodeHashVerified: true
      };

      if (studentSubTribe && certSubTribe && !studentSubTribe.includes(certSubTribe) && !certSubTribe.includes(studentSubTribe)) {
        result.matchStatus = 'MISMATCH';
        result.confidence = 0.78;
        result.discrepancyDetails = `Sub-tribe declared '${student.stSubTribe}' differs from certificate '${certData.subTribe}'.`;
        result.routedTo = 'MANUAL_REVIEW_QUEUE';
      } else {
        result.matchStatus = 'MATCHED';
        result.confidence = 1.0;
        result.discrepancyDetails = 'ST community verified under Presidential Notification Order.';
        result.routedTo = 'DISTRICT_WELFARE_OFFICE';
      }
      break;
    }

    case 'MARKSHEET_PREV': {
      const certMarks = Number(certData.marksPercentage || student.marksPercentage);
      result.extractedFields = {
        cgpaOrPercentage: certMarks,
        examinationRollNo: certData.rollNo || 'KRCE-24-IT-124',
        creditsVerified: 92,
        backlogs: 0
      };

      if (Math.abs(certMarks - student.marksPercentage) > 5) {
        result.matchStatus = 'MISMATCH';
        result.confidence = 0.82;
        result.discrepancyDetails = `Reported marks (${student.marksPercentage}%) differ from Marksheet (${certMarks}%).`;
        result.routedTo = 'MANUAL_REVIEW_QUEUE';
      } else {
        result.matchStatus = 'MATCHED';
        result.confidence = 0.99;
        result.discrepancyDetails = 'Academic progression certified by affiliating University.';
        result.routedTo = 'INSTITUTE_NODAL_OFFICE';
      }
      break;
    }

    default: {
      result.extractedFields = { ...certData };
      result.matchStatus = 'MATCHED';
      result.confidence = 0.95;
      result.routedTo = 'AUTOMATED_CLEARANCE';
    }
  }

  return result;
}
