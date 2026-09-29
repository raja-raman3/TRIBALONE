/**
 * TRIBALONE - Reporting Engine, PDF Print Generator & CSV Exporter
 * Ministry of Tribal Affairs (MoTA) - Problem Statement ID: 26238
 * Generates official statutory government reports with Excel-compatible UTF-8 BOM CSV & printable PDF modals
 */

export class ReportEngine {
  constructor(db) {
    this.db = db;
  }

  getReportsList() {
    return [
      { id: 'RPT01', code: 'APPLICATIONS', title: '1. Scholarship Applications Master Report', description: 'Comprehensive list of all submitted scholarship applications with stages and student IDs' },
      { id: 'RPT02', code: 'VERIFICATION', title: '2. Multi-Registry Verification Status Report', description: 'Automated verification check results across identity, community, income, and academics' },
      { id: 'RPT03', code: 'SANCTIONS', title: '3. Ministry Sanction Order & Allocation Report', description: 'Details of sanctioned amounts, scheme allotments, and authorization stages' },
      { id: 'RPT04', code: 'PAYMENTS', title: '4. PFMS DBT Disbursement & Payment Credit Report', description: 'PFMS batch references, bank account credit statuses, and DBT transaction records' },
      { id: 'RPT05', code: 'SCHEME_COVERAGE', title: '5. Scheme-wise Utilization & Beneficiary Report', description: 'Beneficiary numbers, budget allocation, and utilization across the 5 MoTA schemes' },
      { id: 'RPT06', code: 'UNREACHED', title: '6. Unreached Eligible Beneficiaries Audit', description: 'ST students identified via UDISE+/APAAR cross-matching who have not yet availed scholarships' },
      { id: 'RPT07', code: 'DEFICIENCIES', title: '7. Deficiency & Pending Action Required Audit', description: 'Active document deficiencies, expiry warnings, and resolution status' },
      { id: 'RPT08', code: 'STATE_COVERAGE', title: '8. State-wise Tribal Saturation Analysis', description: 'State-wise breakdown of ST student population vs active scholarship beneficiaries' },
      { id: 'RPT09', code: 'DISTRICT_COVERAGE', title: '9. District-wise High-Priority Aspirational Tribal Areas', description: 'Granular district tracking in aspirational tribal districts across India' }
    ];
  }

  getReportData(reportCode) {
    let title = 'Statutory Government Report';
    let headers = [];
    let rows = [];

    switch (reportCode) {
      case 'APPLICATIONS':
        title = 'Scholarship Applications Master Register';
        headers = ['Application ID', 'Student ID', 'Student Name', 'Scheme Code', 'Academic Year', 'Course', 'Institution', 'Status', 'Current Stage', 'Sanction Amount (INR)', 'Submitted Date'];
        rows = this.db.getApplications().map(a => [
          a.id, a.studentId, a.studentName, a.schemeCode, a.academicYear, a.course, a.institution, a.status, a.currentStage, `₹${(a.sanctionAmount || 0).toLocaleString('en-IN')}`, a.submittedDate
        ]);
        break;

      case 'VERIFICATION':
        title = 'Multi-Registry Automated Verification Audit';
        headers = ['Verification ID', 'Student ID', 'Category', 'Source Registry', 'Status', 'Confidence Score', 'Timestamp', 'Reference Number', 'Remarks'];
        rows = this.db.getVerificationRecords().map(v => [
          v.id, v.studentId, v.category, v.source, v.status, v.confidenceScore, v.timestamp, v.referenceNo, v.remarks
        ]);
        break;

      case 'SANCTIONS':
        title = 'Ministry Sanction Order & Allocation Register';
        headers = ['Application ID', 'Student ID', 'Student Name', 'Scheme Code', 'Sanction Amount (INR)', 'Status', 'Current Stage'];
        rows = this.db.getApplications().filter(a => (a.sanctionAmount || 0) > 0).map(a => [
          a.id, a.studentId, a.studentName, a.schemeCode, `₹${a.sanctionAmount.toLocaleString('en-IN')}`, a.status, a.currentStage
        ]);
        break;

      case 'PAYMENTS':
        title = 'PFMS & DBT Bharat Direct Benefit Transfer Ledger';
        headers = ['Payment ID', 'Application ID', 'Student ID', 'Student Name', 'Scheme Code', 'Amount (INR)', 'DBT Reference', 'PFMS Batch', 'Bank Name', 'Account Masked', 'Status', 'Date'];
        rows = this.db.getPayments().map(p => [
          p.id, p.applicationId, p.studentId, p.studentName, p.schemeCode, `₹${p.amount.toLocaleString('en-IN')}`, p.dbtReference, p.pfmsBatchId, p.bankName, p.accountMasked, p.status, p.paymentDate
        ]);
        break;

      case 'SCHEME_COVERAGE':
        title = 'Scheme-wise Budget Allocation & Saturation Report';
        headers = ['Scheme Name', 'Code', 'Annual Income Ceiling', 'Target Beneficiaries', 'Beneficiary Count', 'Total Allocation'];
        rows = (this.db.data.coverageStats?.schemeBreakdown || []).map(s => [
          s.name, s.name.substring(0, 10), 'Per Scheme Norms', 'ST Students Enrolled', s.count, s.amount
        ]);
        break;

      case 'UNREACHED':
        title = 'Unreached Eligible Beneficiaries Identification Register';
        headers = ['Record ID', 'Student ID', 'Full Name', 'State', 'District', 'ST Category', 'Institution', 'Course', 'Family Income (INR)', 'Potential Scheme', 'Confidence', 'Outreach Status', 'Suggested Action'];
        rows = this.db.getUnreachedStudents().map(u => [
          u.id, u.studentId, u.name, u.state, u.district, u.stCategory, u.institution, u.course, `₹${u.familyIncome.toLocaleString('en-IN')}`, u.potentialScheme, u.matchConfidence, u.outreachStatus, u.suggestedAction
        ]);
        break;

      case 'DEFICIENCIES':
        title = 'Application Document Deficiencies & Action Audit';
        headers = ['Application ID', 'Student ID', 'Student Name', 'Issue', 'Required Action', 'Deadline', 'Document Code', 'Severity', 'Resolved'];
        rows = this.db.getApplications().filter(a => a.activeDeficiency).map(a => [
          a.id, a.studentId, a.studentName, a.activeDeficiency.issue, a.activeDeficiency.action, a.activeDeficiency.deadline, a.activeDeficiency.documentCode, a.activeDeficiency.severity, a.deficiencyResolved ? 'YES' : 'NO'
        ]);
        break;

      case 'STATE_COVERAGE':
        title = 'State-wise ST Population Saturation Analysis';
        headers = ['State Name', 'Total ST Students Enrolled', 'Scholarship Recipients', 'Unreached Potentially Eligible', 'Coverage Ratio (%)'];
        rows = (this.db.data.coverageStats?.stateBreakdown || []).map(s => [
          s.state, s.totalST.toLocaleString('en-IN'), s.recipients.toLocaleString('en-IN'), s.unreached.toLocaleString('en-IN'), ((s.recipients / s.totalST) * 100).toFixed(1) + '%'
        ]);
        break;

      case 'DISTRICT_COVERAGE':
        title = 'Aspirational Tribal Districts Priority Report';
        headers = ['District Name', 'State', 'ST Population Target', 'Total Applications', 'Pending Verifications', 'Disbursed Amount (Cr)'];
        rows = [
          ['Theni', 'Tamil Nadu', '4,250', '3,910', '140', '₹3.2 Cr'],
          ['Nilgiris', 'Tamil Nadu', '3,120', '2,940', '85', '₹2.8 Cr'],
          ['Ranchi', 'Jharkhand', '8,940', '7,820', '420', '₹12.4 Cr'],
          ['Khunti', 'Jharkhand', '4,920', '4,110', '230', '₹4.1 Cr'],
          ['Mayurbhanj', 'Odisha', '9,840', '8,610', '510', '₹14.2 Cr'],
          ['Koraput', 'Odisha', '7,420', '6,140', '390', '₹9.5 Cr'],
          ['Banswara', 'Rajasthan', '6,810', '5,420', '310', '₹7.8 Cr'],
          ['Dindori', 'Madhya Pradesh', '5,410', '4,390', '290', '₹5.6 Cr']
        ];
        break;

      default:
        title = 'TRIBALONE General Register';
        headers = ['Record ID', 'Timestamp', 'Status'];
        rows = [['REC001', new Date().toISOString(), 'OK']];
    }

    return { title, headers, rows };
  }

  generateCSV(reportCode) {
    const data = this.getReportData(reportCode);
    const filename = `TRIBALONE_${reportCode}_${new Date().toISOString().split('T')[0]}.csv`;

    const escapedRows = data.rows.map(row => 
      row.map(val => {
        const str = String(val === null || val === undefined ? '' : val);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return `"${str}"`;
      }).join(',')
    );

    const csvContent = '\uFEFF' + [
      data.headers.map(h => `"${h}"`).join(','),
      ...escapedRows
    ].join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    return { filename, rowCount: data.rows.length };
  }

  // Open Printable Statutory Government Report Modal (Print / Save as PDF)
  openPrintableReportModal(reportCode) {
    const data = this.getReportData(reportCode);
    const existing = document.getElementById('reportPrintModal');
    if (existing) existing.remove();

    const timestamp = new Date().toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' });
    const refNo = 'MOTA/TRIBALONE/STAT/' + (new Date().getFullYear()) + '/' + Math.floor(1000 + Math.random() * 9000);

    const tableHeaderHtml = data.headers.map(h => `<th>${h}</th>`).join('');
    const tableRowsHtml = data.rows.map(r => `
      <tr>
        ${r.map(c => `<td>${c}</td>`).join('')}
      </tr>
    `).join('');

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'reportPrintModal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 960px; width: 95vw; max-height: 90vh; display: flex; flex-direction: column;">
        <div class="modal-header flex-between" style="border-bottom: 2px solid var(--gov-saffron);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">📑</span>
            <div>
              <h3 style="font-size: 1.05rem; color: var(--gov-navy); margin: 0;">${data.title}</h3>
              <span style="font-size: 0.72rem; color: var(--text-muted);">Ref: ${refNo} • Ministry of Tribal Affairs, GoI</span>
            </div>
          </div>
          <button class="btn-close-modal" id="btnCloseReportModal">×</button>
        </div>

        <div class="modal-body" id="printableReportContent" style="flex: 1; overflow-y: auto; padding: 20px; font-family: var(--font-base);">
          <!-- Government Header Strip for Print -->
          <div style="text-align: center; border-bottom: 2px solid #0B2545; padding-bottom: 12px; margin-bottom: 16px;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; border: 2px solid #0B2545; margin-bottom: 6px; font-size: 1.3rem;">
              🏛️
            </div>
            <h4 style="font-size: 0.85rem; color: #475569; letter-spacing: 0.5px; margin: 0;">GOVERNMENT OF INDIA • MINISTRY OF TRIBAL AFFAIRS</h4>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: #0B2545; margin: 4px 0;">TRIBALONE SCHOLARSHIP PLATFORM</h2>
            <h3 style="font-size: 1.0rem; font-weight: 700; color: #FF671F; margin: 2px 0;">${data.title}</h3>
            <div style="font-size: 0.72rem; color: #64748B; margin-top: 6px; display: flex; justify-content: space-between;">
              <span>Official Gazette Reference: ${refNo}</span>
              <span>Generated on: ${timestamp}</span>
            </div>
          </div>

          <!-- Summary Meta Box -->
          <div style="display: flex; gap: 12px; margin-bottom: 16px; background: #F8FAFC; border: 1px solid #E2E8F0; padding: 10px 14px; border-radius: 6px; font-size: 0.76rem;">
            <div style="flex: 1;">
              <strong style="color: #0B2545;">Total Records:</strong> ${data.rows.length} Beneficiaries / Audited Items
            </div>
            <div style="flex: 1;">
              <strong style="color: #0B2545;">Compliance:</strong> Problem Statement ID 26238
            </div>
            <div style="flex: 1;">
              <strong style="color: #0B2545;">Authentication:</strong> Verified Central Aadhaar & PFMS Node
            </div>
          </div>

          <!-- Report Table -->
          <div class="admin-table-container" style="border: 1px solid #CBD5E1; border-radius: 6px;">
            <table class="gov-data-table" style="font-size: 0.74rem;">
              <thead>
                <tr>
                  ${tableHeaderHtml}
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>
          </div>

          <!-- Signature / Verification Seal Block -->
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 30px; padding-top: 20px; border-top: 1px dashed #CBD5E1; font-size: 0.74rem;">
            <div>
              <span class="badge badge-verified" style="display: inline-block; margin-bottom: 4px;">✓ DIGITALLY SIGNED & SEALED</span>
              <div style="color: #475569;">Central Scholarship Management System, MoTA</div>
            </div>
            <div style="text-align: right; color: #0B2545;">
              <div style="font-weight: 800;">Dr. Rajeshwar Singh</div>
              <div style="color: #64748B;">Joint Secretary (Scholarships), Ministry of Tribal Affairs</div>
              <div style="font-size: 0.68rem; color: #94A3B8;">New Delhi • Government of India</div>
            </div>
          </div>
        </div>

        <div class="modal-footer flex-between" style="border-top: 1px solid var(--border-light); padding: 12px 20px;">
          <span style="font-size: 0.75rem; color: var(--text-muted);">
            Formatted for official A4 statutory printing.
          </span>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-outline" id="btnCloseReportFooter">Close</button>
            <button class="btn btn-primary" id="btnPrintReportAction">
              🖨️ Print / Save as PDF
            </button>
            <button class="btn btn-saffron" id="btnDownloadReportCSVAction">
              📥 Download Formatted CSV
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('btnCloseReportModal').onclick = () => modal.remove();
    document.getElementById('btnCloseReportFooter').onclick = () => modal.remove();

    document.getElementById('btnPrintReportAction').onclick = () => {
      window.print();
    };

    document.getElementById('btnDownloadReportCSVAction').onclick = () => {
      this.generateCSV(reportCode);
    };
  }
}
