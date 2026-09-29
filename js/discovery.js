/**
 * TRIBALONE - Scholarship Discovery Engine
 * 12-Question Interactive Evaluator with Rules-Based Matching
 */

export const discoveryQuestions = [
  {
    id: 'isST',
    question: '1. Are you a recognized Scheduled Tribe (ST) student?',
    questionTa: '1. நீங்கள் அங்கீகரிக்கப்பட்ட பழங்குடியின (ST) மாணவரா?',
    type: 'radio',
    options: [
      { label: 'Yes, with valid community certificate', value: 'yes' },
      { label: 'No / Other community', value: 'no' }
    ],
    default: 'yes'
  },
  {
    id: 'isPVTG',
    question: '2. Do you belong to a Particularly Vulnerable Tribal Group (PVTG)?',
    questionTa: '2. நீங்கள் குறிப்பாக பாதிக்கப்படக்கூடிய பழங்குடி குழுவைச் (PVTG) சேர்ந்தவரா?',
    type: 'radio',
    options: [
      { label: 'Yes (e.g., Toda, Kota, Irula, Baiga, Birhor, Sahariya, etc.)', value: 'yes' },
      { label: 'No / General ST Community', value: 'no' }
    ],
    default: 'no'
  },
  {
    id: 'eduLevel',
    question: '3. What is your current level of education?',
    questionTa: '3. உங்கள் தற்போதைய கல்வி நிலை என்ன?',
    type: 'select',
    options: [
      { label: 'Secondary School (Classes 9 or 10)', value: 'school_secondary' },
      { label: 'Higher Secondary (Classes 11 or 12)', value: 'school_hrsec' },
      { label: 'Polytechnic / Diploma / ITI', value: 'diploma' },
      { label: 'Undergraduate Degree (B.Tech, B.Sc, B.Com, B.A, MBBS)', value: 'undergrad' },
      { label: 'Postgraduate Degree (M.Tech, M.Sc, M.A, MBA)', value: 'postgrad' },
      { label: 'Doctoral / Ph.D. / M.Phil Research', value: 'research' }
    ],
    default: 'undergrad'
  },
  {
    id: 'courseName',
    question: '4. What course are you studying?',
    questionTa: '4. நீங்கள் என்ன படிப்பு படிக்கிறீர்கள்?',
    type: 'text',
    placeholder: 'e.g. B.Tech Information Technology',
    default: 'B.Tech Information Technology'
  },
  {
    id: 'currentYear',
    question: '5. Which academic year are you currently studying in?',
    questionTa: '5. நீங்கள் தற்போது எந்த கல்வி ஆண்டில் படிக்கிறீர்கள்?',
    type: 'select',
    options: [
      { label: '1st Year / Fresh Admission', value: '1' },
      { label: '2nd Year', value: '2' },
      { label: '3rd Year', value: '3' },
      { label: '4th / 5th Year', value: '4' },
      { label: 'Class 9', value: '9' },
      { label: 'Class 10', value: '10' }
    ],
    default: '3'
  },
  {
    id: 'familyIncome',
    question: '6. What is your total annual family income from all sources?',
    questionTa: '6. உங்கள் குடும்பத்தின் மொத்த ஆண்டு வருமானம் என்ன?',
    type: 'select',
    options: [
      { label: 'Up to ₹2,50,000 / year (Eligible for all national schemes)', value: '250000' },
      { label: 'Between ₹2,50,001 and ₹6,00,000 / year', value: '600000' },
      { label: 'Between ₹6,00,001 and ₹8,00,000 / year (Eligible for Top Class & NOS)', value: '800000' },
      { label: 'Above ₹8,00,000 / year', value: '1000000' }
    ],
    default: '250000'
  },
  {
    id: 'isTopClassInst',
    question: '7. Is your institution in the MoTA Notified 259 Premier Institutes (IIT, NIT, IIM, AIIMS, etc.)?',
    questionTa: '7. உங்கள் கல்வி நிறுவனம் MoTA அங்கீகரித்த 259 உயர்தர நிறுவனங்களில் உள்ளதா?',
    type: 'radio',
    options: [
      { label: 'Yes, notified premier institution', value: 'yes' },
      { label: 'No / State or Private Affiliated College', value: 'no' }
    ],
    default: 'no'
  },
  {
    id: 'hasNetJrf',
    question: '8. Have you qualified UGC-NET / CSIR-NET / JRF for research fellowships?',
    questionTa: '8. நீங்கள் UGC-NET / CSIR-NET / JRF தேர்ச்சி பெற்றுள்ளீர்களா?',
    type: 'radio',
    options: [
      { label: 'Yes, qualified NET-JRF', value: 'yes' },
      { label: 'No / Not Applicable', value: 'no' }
    ],
    default: 'no'
  },
  {
    id: 'plansHigherStudies',
    question: '9. Are you planning higher studies (Postgraduate, Ph.D. or Research)?',
    questionTa: '9. நீங்கள் உயர் படிப்புகளை (முதுகலை, பிஎச்.டி) திட்டமிடுகிறீர்களா?',
    type: 'radio',
    options: [
      { label: 'Yes, actively pursuing/planning', value: 'yes' },
      { label: 'No / Focusing on current course', value: 'no' }
    ],
    default: 'yes'
  },
  {
    id: 'plansOverseas',
    question: '10. Are you planning to study Master’s or Ph.D. in a foreign university?',
    questionTa: '10. நீங்கள் வெளிநாட்டுப் பல்கலைக்கழகத்தில் முதுகலை அல்லது பிஎச்.டி படிக்க திட்டமிடுகிறீர்களா?',
    type: 'radio',
    options: [
      { label: 'Yes, seeking overseas opportunities', value: 'yes' },
      { label: 'No / Domestic studies only', value: 'no' }
    ],
    default: 'no'
  },
  {
    id: 'hasPassport',
    question: '11. Do you possess a valid Indian Passport?',
    questionTa: '11. உங்களிடம் செல்லுபடியாகும் இந்திய பாஸ்போர்ட் உள்ளதா?',
    type: 'radio',
    options: [
      { label: 'Yes, have valid passport', value: 'yes' },
      { label: 'No / Applied / Not yet obtained', value: 'no' }
    ],
    default: 'no'
  },
  {
    id: 'isPwd',
    question: '12. Are you a Person with Benchmark Disability (PwD, 40%+)?',
    questionTa: '12. நீங்கள் 40%+ மாற்றுத்திறனாளி (PwD) பிரிவைச் சேர்ந்தவரா?',
    type: 'radio',
    options: [
      { label: 'Yes, with valid UDID card', value: 'yes' },
      { label: 'No', value: 'no' }
    ],
    default: 'no'
  }
];

export function evaluateDiscovery(answers, rules) {
  const isST = answers.isST === 'yes';
  const isPVTG = answers.isPVTG === 'yes';
  const income = parseInt(answers.familyIncome, 10);
  const eduLevel = answers.eduLevel;
  const isTopClass = answers.isTopClassInst === 'yes';
  const hasNetJrf = answers.hasNetJrf === 'yes';
  const plansOverseas = answers.plansOverseas === 'yes';
  const hasPassport = answers.hasPassport === 'yes';

  const results = [];

  // If not ST, ineligible for MoTA ST schemes
  if (!isST) {
    return [
      {
        schemeCode: 'GENERAL_NOTICE',
        name: 'Ministry of Tribal Affairs Schemes',
        status: 'Not Currently Applicable',
        statusBadge: 'statusMismatch',
        color: 'red',
        reason: 'Applicant does not belong to the Scheduled Tribe community. MoTA scholarships are constitutionally reserved for Scheduled Tribe students.',
        action: 'Explore General/OBC/SC/EWS scholarships on National Scholarship Portal.'
      }
    ];
  }

  // 1. Pre-Matric Evaluation
  if (eduLevel === 'school_secondary') {
    if (income <= 250000) {
      results.push({
        schemeCode: 'PRE_MATRIC',
        name: 'Pre-Matric Scholarship for ST Students',
        status: 'Potentially Eligible',
        statusBadge: 'statusVerified',
        color: 'green',
        reason: 'You meet ST community, school level (Class 9-10), and income ceiling criteria (<= ₹2.5L).',
        action: 'Ready to Apply via School Headmaster / UDISE+ roster.'
      });
    } else {
      results.push({
        schemeCode: 'PRE_MATRIC',
        name: 'Pre-Matric Scholarship for ST Students',
        status: 'Additional Qualification Required',
        statusBadge: 'statusNeedsReview',
        color: 'amber',
        reason: 'Income exceeds standard ceiling of ₹2,50,000 / year.',
        action: 'Check if special exemption applies under state PVTG guidelines.'
      });
    }
  }

  // 2. Post-Matric Evaluation
  if (['school_hrsec', 'diploma', 'undergrad', 'postgrad'].includes(eduLevel)) {
    if (income <= 250000) {
      results.push({
        schemeCode: 'POST_MATRIC',
        name: 'Post-Matric Scholarship for ST Students',
        status: 'Potentially Eligible',
        statusBadge: 'statusVerified',
        color: 'green',
        reason: 'Ideal match! Meets post-matric recognized course level, ST category, and family income ceiling (<= ₹2.5 Lakhs).',
        action: 'Recommended Scheme. You can reuse existing documents from your wallet!'
      });
    } else {
      results.push({
        schemeCode: 'POST_MATRIC',
        name: 'Post-Matric Scholarship for ST Students',
        status: 'Needs Official Verification',
        statusBadge: 'statusNeedsReview',
        color: 'amber',
        reason: 'Annual family income is above the ₹2,50,000 threshold for standard Post-Matric fee reimbursement.',
        action: 'Submit updated revenue certificate for reconsideration.'
      });
    }
  }

  // 3. Top Class Evaluation
  if (isTopClass && ['undergrad', 'postgrad'].includes(eduLevel)) {
    if (income <= 800000) {
      results.push({
        schemeCode: 'TOP_CLASS',
        name: 'Top Class Education for ST Students',
        status: 'Potentially Eligible',
        statusBadge: 'statusVerified',
        color: 'green',
        reason: 'Student enrolled in MoTA Notified Premier Institution with family income under ₹8.00 Lakhs.',
        action: 'Apply directly with college admission letter & fee receipt.'
      });
    } else {
      results.push({
        schemeCode: 'TOP_CLASS',
        name: 'Top Class Education for ST Students',
        status: 'Additional Qualification Required',
        statusBadge: 'statusNeedsReview',
        color: 'amber',
        reason: 'Family income exceeds Top Class ceiling of ₹8,00,000 / year.',
        action: 'Income ceiling strictly enforced per MoTA guidelines.'
      });
    }
  } else if (['undergrad', 'postgrad'].includes(eduLevel) && !isTopClass) {
    results.push({
      schemeCode: 'TOP_CLASS',
      name: 'Top Class Education for ST Students',
      status: 'Additional Qualification Required',
      statusBadge: 'statusMismatch',
      color: 'gray',
      reason: 'Available exclusively for students enrolled in 259 Notified Premier Institutions (IITs, NITs, IIMs, AIIMS, NLUs, etc.).',
      action: 'If you secure admission into a notified institute, you will become eligible.'
    });
  }

  // 4. NFST Evaluation
  if (eduLevel === 'research' || hasNetJrf) {
    results.push({
      schemeCode: 'NFST',
      name: 'National Fellowship for ST Students (NFST)',
      status: hasNetJrf ? 'Potentially Eligible' : 'Needs Official Verification',
      statusBadge: hasNetJrf ? 'statusVerified' : 'statusNeedsReview',
      color: hasNetJrf ? 'green' : 'amber',
      reason: hasNetJrf
        ? 'NET/JRF qualification confirmed for Ph.D. research fellowship. No income ceiling applies.'
        : 'Doctoral registration requires valid UGC-NET score or merit screening by MoTA Selection Board.',
      action: 'Upload UGC-NET scorecard and Ph.D. registration letter.'
    });
  }

  // 5. NOS Evaluation
  if (plansOverseas) {
    if (hasPassport && income <= 800000) {
      results.push({
        schemeCode: 'NOS',
        name: 'National Overseas Scholarship (NOS)',
        status: 'Potentially Eligible',
        statusBadge: 'statusVerified',
        color: 'green',
        reason: 'Valid passport, overseas higher study aspirations, and income within ₹8.00 Lakhs ceiling.',
        action: 'Secure unconditional offer letter from QS Top 500 foreign university.'
      });
    } else {
      results.push({
        schemeCode: 'NOS',
        name: 'National Overseas Scholarship (NOS)',
        status: 'Additional Qualification Required',
        statusBadge: 'statusNeedsReview',
        color: 'amber',
        reason: !hasPassport
          ? 'Requires valid Indian passport and unconditional admission offer from QS Top 500 foreign university.'
          : 'Family income must be within ₹8,00,000 / year.',
        action: 'Obtain passport and foreign admission offer letter.'
      });
    }
  }

  return results;
}
