/**
 * TRIBALONE - Master Application Controller
 * Ministry of Tribal Affairs (MoTA) - Problem Statement ID: 26238
 * "One Student. One Profile. One Scholarship View."
 */

import { db } from './db.js';
import { i18n, translations, languageList } from './i18n.js';
import { JagoAssistant } from './jago.js';
import { auth } from './auth.js';

export class TribalOneApp {
  constructor() {
    this.db = db;
    this.i18n = i18n;
    this.auth = auth;
    this.jago = new JagoAssistant(this.db);

    this.activeStudentTab = 'overview';
    this.activeInstituteTab = 'pending';
    this.activeOfficerTab = 'scrutiny';
    this.activeAdminTab = 'overview';
    this.activeParentTab = 'overview';
    this.selectedParentStudentId = 'ST202600124';

    this.selectedSchemeCategory = 'ALL';
    this.selectedStateFilter = 'ALL';

    this.ensureRichApplicationDataset();
    this.init();
  }

  // Returns all 17+ central and state scholarships formatted consistently
  getSchemes() {
    const central = (this.db.data.scholarships || []).map(s => ({
      id: s.id || s.code,
      name: s.name,
      type: 'Central',
      state: 'Central',
      category: s.code === 'PRE_MATRIC' ? 'Pre-Matric' : (s.code === 'POST_MATRIC' ? 'Post-Matric' : (s.code === 'TOP_CLASS' ? 'Top Class' : (s.code === 'NOS' ? 'National Overseas' : 'Post-Matric'))),
      level: s.level || 'Higher Education',
      description: s.description || 'Ministry of Tribal Affairs Central Sector Scholarship Scheme.',
      maxAmount: s.code === 'PRE_MATRIC' ? 7000 : (s.code === 'POST_MATRIC' ? 28000 : (s.code === 'TOP_CLASS' ? 200000 : (s.code === 'NOS' ? 2450000 : 484000))),
      incomeCeiling: s.incomeLimit ? `₹${(s.incomeLimit / 100000).toFixed(1)} Lakh / Year` : 'Merit Based (No Income Limit)'
    }));

    const state = (this.db.data.state_scholarships || []).map(s => ({
      id: s.id || s.code,
      name: s.name,
      type: 'State',
      state: s.state,
      category: s.name.toLowerCase().includes('pre-matric') ? 'Pre-Matric' : (s.name.toLowerCase().includes('overseas') ? 'National Overseas' : (s.name.toLowerCase().includes('top') || s.name.toLowerCase().includes('coaching') ? 'Top Class' : 'Post-Matric')),
      level: s.level || 'Higher Education',
      description: s.description || 'State Tribal Welfare Department Scholarship Scheme.',
      maxAmount: s.name.toLowerCase().includes('overseas') ? 4500000 : (s.name.toLowerCase().includes('pvtg') ? 20000 : 28000),
      incomeCeiling: s.incomeLimit ? `₹${(s.incomeLimit / 100000).toFixed(1)} Lakh / Year` : 'PVTG / Special Grant'
    }));

    return [...central, ...state];
  }

  // Ensures at least 20+ rich dummy applications in various verification stages
  ensureRichApplicationDataset() {
    const existing = this.db.data.applications || [];
    if (existing.length < 15) {
      const richDummies = [
        { id: 'APP-2026-TN101', studentId: 'ST202600124', studentName: 'Arun Kumar', state: 'Tamil Nadu', district: 'Theni', course: 'B.Tech Information Technology', institution: 'K. Ramakrishnan College of Engineering', marks: 84.6, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 28000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '12 Sep 2026' },
        { id: 'APP-2026-TN102', studentId: 'ST202600125', studentName: 'Priya Kumar', state: 'Tamil Nadu', district: 'Theni', course: 'Secondary (Class 10)', institution: 'Govt Tribal Residential HSS, Megamalai', marks: 88.2, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '10 Sep 2026' },
        { id: 'APP-2026-JH103', studentId: 'ST202600126', studentName: 'Birsa Soren', state: 'Jharkhand', district: 'Ranchi', course: 'B.Tech Computer Science', institution: 'Birla Institute of Technology, Mesra', marks: 91.4, schemeId: 'SCH003', schemeName: 'Top Class Education for ST Students', sanctionAmount: 186000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '14 Sep 2026' },
        { id: 'APP-2026-OD104', studentId: 'ST202600127', studentName: 'Mangal Marndi', state: 'Odisha', district: 'Mayurbhanj', course: 'Ph.D. Material Sciences', institution: 'Indian Institute of Technology Kharagpur', marks: 86.8, schemeId: 'SCH004', schemeName: 'National Fellowship for ST Students (NFST)', sanctionAmount: 484000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '08 Sep 2026' },
        { id: 'APP-2026-KA105', studentId: 'ST202600128', studentName: 'Ananya Naik', state: 'Karnataka', district: 'Kodagu', course: 'M.Sc. Artificial Intelligence', institution: 'University of Edinburgh (Overseas)', marks: 89.5, schemeId: 'SCH005', schemeName: 'National Overseas Scholarship (NOS)', sanctionAmount: 2450000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '15 Sep 2026' },
        { id: 'APP-2026-MP106', studentId: 'ST202600129', studentName: 'Kamla Gond', state: 'Madhya Pradesh', district: 'Dindori', course: 'B.Sc. Agriculture', institution: 'Jawaharlal Nehru Krishi Vishwavidyalaya', marks: 79.2, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 24000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '16 Sep 2026' },
        { id: 'APP-2026-RJ107', studentId: 'ST202600130', studentName: 'Devendra Bhil', state: 'Rajasthan', district: 'Banswara', course: 'Diploma Mechanical Engineering', institution: 'Govt Polytechnic College, Banswara', marks: 81.0, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 18000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '05 Sep 2026' },
        { id: 'APP-2026-AS108', studentId: 'ST202600131', studentName: 'Jonali Bodo', state: 'Assam', district: 'Kokrajhar', course: 'Class 9 (Secondary)', institution: 'Govt Tribal High School, Kokrajhar', marks: 85.5, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '18 Sep 2026' },
        { id: 'APP-2026-CG109', studentId: 'ST202600132', studentName: 'Suresh Muria', state: 'Chhattisgarh', district: 'Bastar', course: 'B.A. Political Science', institution: 'Govt Kaktiya PG College, Jagdalpur', marks: 76.4, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 20000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '19 Sep 2026' },
        { id: 'APP-2026-MH110', studentId: 'ST202600133', studentName: 'Pooja Warli', state: 'Maharashtra', district: 'Palghar', course: 'Class 10 (Secondary)', institution: 'Ashram Shala Secondary School, Dahanu', marks: 92.0, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '09 Sep 2026' },
        { id: 'APP-2026-TN111', studentId: 'ST202600134', studentName: 'Vignesh Kani', state: 'Tamil Nadu', district: 'Tirunelveli', course: 'B.Sc Computer Science', institution: 'St. Xavier\'s College, Palayamkottai', marks: 83.2, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 26000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '20 Sep 2026' },
        { id: 'APP-2026-OD112', studentId: 'ST202600135', studentName: 'Dambaru Kondh', state: 'Odisha', district: 'Rayagada', course: 'PVTG Special Vocational Training', institution: 'Gopabandhu Tribal Academy, Rayagada', marks: 87.5, schemeId: 'ST_SCH_OD02', schemeName: 'Odisha PVTG Special Education Grant', sanctionAmount: 20000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '04 Sep 2026' },
        { id: 'APP-2026-JH113', studentId: 'ST202600136', studentName: 'Anita Munda', state: 'Jharkhand', district: 'Khunti', course: 'B.Sc Nursing', institution: 'Ranchi College of Nursing', marks: 88.0, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 32000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '21 Sep 2026' },
        { id: 'APP-2026-MP114', studentId: 'ST202600137', studentName: 'Ravi Baiga', state: 'Madhya Pradesh', district: 'Mandla', course: 'Class 10 (Secondary)', institution: 'Govt Tribal Ashram School, Mandla', marks: 80.5, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '22 Sep 2026' },
        { id: 'APP-2026-TN115', studentId: 'ST202600138', studentName: 'Selvi Irular', state: 'Tamil Nadu', district: 'Chengalpattu', course: 'B.Com Corporate Secretaryship', institution: 'Madras Christian College, Tambaram', marks: 86.4, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 28000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '02 Sep 2026' },
        { id: 'APP-2026-GJ116', studentId: 'ST202600139', studentName: 'Bhavesh Rathwa', state: 'Gujarat', district: 'Chhota Udepur', course: 'B.Tech Civil Engineering', institution: 'MS University of Baroda', marks: 82.5, schemeId: 'SCH003', schemeName: 'Top Class Education for ST Students', sanctionAmount: 145000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '23 Sep 2026' },
        { id: 'APP-2026-AP117', studentId: 'ST202600140', studentName: 'Laxmi Koya', state: 'Andhra Pradesh', district: 'Alluri Sitharama Raju', course: 'Class 9 (Secondary)', institution: 'Tribal Welfare Residential School, Paderu', marks: 90.1, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '01 Sep 2026' },
        { id: 'APP-2026-JH118', studentId: 'ST202600141', studentName: 'Manish Kerketta', state: 'Jharkhand', district: 'Simdega', course: 'B.Tech Electrical Engineering', institution: 'NIT Trichy', marks: 92.8, schemeId: 'SCH003', schemeName: 'Top Class Education for ST Students', sanctionAmount: 186000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '24 Sep 2026' },
        { id: 'APP-2026-OD119', studentId: 'ST202600142', studentName: 'Padmini Bhuyan', state: 'Odisha', district: 'Sundargarh', course: 'M.Sc Biotechnology', institution: 'NIT Rourkela', marks: 85.0, schemeId: 'SCH002', schemeName: 'Post-Matric Scholarship for ST Students', sanctionAmount: 35000, status: 'INSTITUTE_VERIFIED', currentStage: 'State Verification', submittedDate: '28 Aug 2026' },
        { id: 'APP-2026-TN120', studentId: 'ST202600143', studentName: 'Murugan Toda', state: 'Tamil Nadu', district: 'Nilgiris', course: 'Class 10 (Secondary)', institution: 'Government Tribal High School, Ooty', marks: 89.0, schemeId: 'SCH001', schemeName: 'Pre-Matric Scholarship for ST Students', sanctionAmount: 7000, status: 'SUBMITTED', currentStage: 'Institute Verification', submittedDate: '25 Sep 2026' }
      ];
      this.db.data.applications = richDummies;
      this.db.save();
    }
  }

  init() {
    this.setupGlobalControls();
    this.setupFloatingJago();
    this.render();
  }

  t(key, defaultVal = '') {
    const res = this.i18n.t(key);
    return (res && res !== key) ? res : (defaultVal || key);
  }

  showToast(message, type = 'info') {
    const existing = document.querySelector('.toast-notice');
    if (existing) existing.remove();

    const icons = { info: 'ℹ️', success: '✅', error: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast-notice ${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    const icon = icons[type] || icons.info;
    toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 4000);
  }

  setupGlobalControls() {
    const brandLink = document.getElementById('headerBrandLink');
    if (brandLink) {
      brandLink.addEventListener('click', () => {
        this.render();
      });
    }

    const langSelect = document.getElementById('globalLanguageSelect');
    if (langSelect) {
      langSelect.value = this.db.getCurrentLanguage();
      this.updateLanguagePrefix(langSelect.value);

      langSelect.addEventListener('change', (e) => {
        const nextLang = e.target.value;
        this.db.setCurrentLanguage(nextLang);
        this.i18n.setLanguage(nextLang);
        document.body.className = 'lang-' + nextLang;
        this.updateLanguagePrefix(nextLang);
        this.render();
        this.updateFloatingJagoGreeting();
        this.showToast(`🌐 Language: ${e.target.options[e.target.selectedIndex].text}`, 'success');
      });
    }

    const viewBtn = document.getElementById('globalViewportToggle');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        const nextMode = this.db.getViewportMode() === 'mobile' ? 'desktop' : 'mobile';
        this.db.setViewportMode(nextMode);
        this.render();
        this.showToast(`Viewport: ${nextMode === 'mobile' ? 'Mobile Phone Simulator' : 'Desktop Portal'}`, 'info');
      });
    }
  }

  updateLanguagePrefix(langCode) {
    const prefixMap = {
      en: '🌐 Language:',
      ta: '🌐 மொழி:',
      hi: '🌐 भाषा:',
      te: '🌐 భాష:',
      kn: '🌐 ಭಾಷೆ:',
      ml: '🌐 ഭാഷ:',
      bn: '🌐 ভাষা:',
      mr: '🌐 भाषा:',
      gu: '🌐 ભાષા:',
      or: '🌐 ଭାଷା:',
      pa: '🌐 ਭਾਸ਼ਾ:',
      as: '🌐 ভাষা:',
      sat: '🌐 ᱯᱟᱹᱨᱥᱤ:',
      gon: '🌐 भाषा:'
    };
    const labelSpan = document.getElementById('globalLangPrefixLabel');
    if (labelSpan) {
      labelSpan.textContent = prefixMap[langCode] || '🌐 Language:';
    }
  }

  updateHeaderAuthContainer() {
    const container = document.getElementById('headerAuthContainer');
    if (!container) return;

    const isLoggedIn = this.db.getIsLoggedIn();
    const role = this.db.getCurrentRole();

    if (!isLoggedIn) {
      container.innerHTML = '';
      return;
    }

    let displayName = 'User';
    let roleBadge = 'User';
    let avatar = '👤';

    if (role === 'student') {
      const student = this.db.getCurrentStudent();
      displayName = student.name;
      roleBadge = this.t('roleStudent', 'Student');
      avatar = '🎓';
    } else if (role === 'institute') {
      displayName = 'NIT Trichy / College';
      roleBadge = this.t('roleInstitute', 'Institute Nodal Desk');
      avatar = '🏫';
    } else if (role === 'verification') {
      displayName = 'S. Meenakshi';
      roleBadge = this.t('roleVerification', 'State Nodal Officer');
      avatar = '🛡️';
    } else if (role === 'admin') {
      displayName = 'Dr. Rajeshwar Singh';
      roleBadge = this.t('roleAdmin', 'MoTA National Admin');
      avatar = '🏛️';
    } else if (role === 'parent') {
      displayName = 'Ramesh Kumar';
      roleBadge = this.t('roleParent', 'Parent');
      avatar = '👨‍👩‍👧';
    }

    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.15); padding: 4px 10px; border-radius: 18px; color: #fff; font-size: 0.82rem; border: 1px solid rgba(255,255,255,0.25);">
          <span>${avatar}</span>
          <div style="line-height: 1.1;">
            <strong style="display: block; font-weight: 700; font-size: 0.8rem;">${displayName}</strong>
            <span style="font-size: 0.68rem; opacity: 0.85;">${roleBadge}</span>
          </div>
        </div>
        <button id="btnHeaderLogout" class="btn btn-sm" style="background: rgba(239, 68, 68, 0.9); color: white; border: none; padding: 5px 10px; border-radius: 6px; font-weight: 600; font-size: 0.78rem; cursor: pointer;">
          🚪 ${this.t('logoutBtn', 'Sign Out')}
        </button>
      </div>
    `;

    const logoutBtn = document.getElementById('btnHeaderLogout');
    if (logoutBtn) {
      logoutBtn.onclick = () => {
        this.auth.logout();
        this.showToast('Successfully signed out of portal', 'info');
        this.render();
      };
    }
  }

  setupFloatingJago() {
    const trigger = document.getElementById('globalJagoTrigger');
    const popup = document.getElementById('globalJagoPopup');
    const btnClose = document.getElementById('btnCloseFloatingJago');
    const btnMin = document.getElementById('btnMinimizeFloatingJago');
    const form = document.getElementById('globalJagoChatForm');
    const chipsScroll = document.getElementById('globalJagoChipsScroll');

    if (!trigger || !popup) return;

    trigger.onclick = () => {
      popup.classList.toggle('minimized');
      if (!popup.classList.contains('minimized')) {
        this.updateFloatingJagoGreeting();
        const input = document.getElementById('globalJagoInputText');
        if (input) input.focus();
      }
    };

    if (btnClose) btnClose.onclick = () => popup.classList.add('minimized');
    if (btnMin) btnMin.onclick = () => popup.classList.add('minimized');

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('globalJagoInputText');
        if (input && input.value.trim()) {
          this.handleGlobalJagoQuery(input.value.trim());
          input.value = '';
        }
      };
    }

    if (chipsScroll) {
      chipsScroll.querySelectorAll('.jago-chip-btn').forEach(chip => {
        chip.onclick = (e) => {
          const query = e.currentTarget.getAttribute('data-query');
          if (query) {
            this.handleGlobalJagoQuery(query);
          }
        };
      });
    }
  }

  updateFloatingJagoGreeting() {
    const area = document.getElementById('globalJagoMessagesArea');
    if (!area) return;
    const greeting = this.i18n.t('jagoGreeting') || "Namaste! I am JAGO, your National Tribal Scholarship AI Assistant. How can I help you today?";
    area.innerHTML = `
      <div class="chat-bubble bot">
        ${greeting}
        <span class="chat-time">Just now</span>
      </div>
    `;
  }

  handleGlobalJagoQuery(queryText) {
    const area = document.getElementById('globalJagoMessagesArea');
    if (!area) return;

    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.innerHTML = `${queryText} <span class="chat-time">Just now</span>`;
    area.appendChild(userBubble);
    area.scrollTop = area.scrollHeight;

    setTimeout(() => {
      const response = this.jago.getResponse(queryText, this.db.getCurrentLanguage());
      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble bot';
      const formatted = response
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code style="background: rgba(0,0,0,0.06); padding: 2px 5px; border-radius: 4px; font-weight: 700; color: #1338BE;">$1</code>')
        .replace(/\n/g, '<br/>');
      botBubble.innerHTML = `${formatted} <span class="chat-time">Just now</span>`;
      area.appendChild(botBubble);
      area.scrollTop = area.scrollHeight;
    }, 200);
  }

  render() {
    const isLoggedIn = this.db.getIsLoggedIn();
    const role = this.db.getCurrentRole();
    const mode = this.db.getViewportMode();
    const mainContainer = document.getElementById('mainAppContainer');
    if (!mainContainer) return;

    this.updateHeaderAuthContainer();

    const viewBtn = document.getElementById('globalViewportToggle');
    if (viewBtn) {
      viewBtn.innerHTML = mode === 'mobile' ? `💻 ${this.t('viewDesktop', 'Switch to Desktop')}` : `📱 ${this.t('viewMobile', 'Switch to Mobile')}`;
    }

    let modalWrapper = document.getElementById('modalWrapper');
    if (!modalWrapper) {
      modalWrapper = document.createElement('div');
      modalWrapper.id = 'modalWrapper';
      document.body.appendChild(modalWrapper);
    }

    if (!isLoggedIn) {
      mainContainer.innerHTML = this.renderPublicPortal();
      this.attachPublicPortalEvents();
    } else {
      if (mode === 'mobile' && role === 'student') {
        mainContainer.innerHTML = this.renderMobileStudentSimulator();
        this.attachMobileStudentEvents();
      } else {
        mainContainer.innerHTML = this.renderRoleDashboard(role);
        this.attachRoleDashboardEvents(role);
      }
    }
  }

  // ==========================================================================
  // 1. PUBLIC PORTAL
  // ==========================================================================
  renderPublicPortal() {
    const schemes = this.getSchemes();
    const filteredSchemes = schemes.filter(s => {
      const matchCat = this.selectedSchemeCategory === 'ALL' || s.category === this.selectedSchemeCategory;
      const matchState = this.selectedStateFilter === 'ALL' || s.state === 'Central' || s.state === this.selectedStateFilter;
      return matchCat && matchState;
    });

    const states = ['ALL', 'Central', 'Tamil Nadu', 'Odisha', 'Jharkhand', 'Madhya Pradesh', 'Maharashtra', 'Assam', 'Chhattisgarh', 'Rajasthan', 'Gujarat'];

    return `
      <div class="public-portal-wrapper">
        <!-- Compact Hero Section -->
        <section class="public-hero-section" style="background: linear-gradient(135deg, #07182C 0%, #0B2545 65%, #1338BE 100%); color: white; padding: 26px 22px; border-radius: 12px; margin-bottom: 22px; box-shadow: 0 6px 18px rgba(11, 37, 69, 0.15); position: relative; overflow: hidden;">
          <div style="position: absolute; top: -25px; right: -25px; width: 180px; height: 180px; background: radial-gradient(circle, rgba(255,103,31,0.2) 0%, transparent 70%); border-radius: 50%;"></div>
          <div style="position: absolute; bottom: -25px; left: 10%; width: 160px; height: 160px; background: radial-gradient(circle, rgba(4,106,56,0.2) 0%, transparent 70%); border-radius: 50%;"></div>

          <div style="position: relative; z-index: 2; max-width: 840px; margin: 0 auto; text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255, 103, 31, 0.18); border: 1px solid rgba(255, 103, 31, 0.35); padding: 2px 10px; border-radius: 16px; font-size: 0.75rem; font-weight: 700; color: #FFD2BA; margin-bottom: 8px;">
              🇮🇳 ${this.t('govName', 'Ministry of Tribal Affairs')} • Direct Benefit Transfer (DBT)
            </div>
            
            <h1 style="font-size: 1.75rem; font-weight: 800; line-height: 1.25; margin: 0 0 6px; letter-spacing: -0.3px;">
              ${this.t('appTitle', 'Unified National Tribal Scholarship Portal')}
            </h1>
            
            <p style="font-size: 0.9rem; color: #E2E8F0; max-width: 680px; margin: 0 auto 16px; line-height: 1.45;">
              ${this.t('tagline', 'One Student. One Profile. One Scholarship View.')} — Central & State scholarship access for Scheduled Tribe students across India.
            </p>

            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-bottom: 18px;">
              <button id="btnHeroExplore" class="btn" style="background: var(--gov-saffron); color: white; font-weight: 700; padding: 8px 18px; border-radius: 6px; font-size: 0.88rem; border: none; cursor: pointer; box-shadow: 0 3px 8px rgba(255,103,31,0.35);">
                🔍 Available Scholarships (${schemes.length})
              </button>
              <button id="btnHeroRegister" class="btn" style="background: #046A38; color: white; font-weight: 700; padding: 8px 18px; border-radius: 6px; font-size: 0.88rem; border: none; cursor: pointer; box-shadow: 0 3px 8px rgba(4,106,56,0.3);">
                📝 New Student Registration
              </button>
              <button id="btnHeroLogin" class="btn" style="background: rgba(255,255,255,0.15); color: white; font-weight: 600; padding: 8px 16px; border-radius: 6px; font-size: 0.88rem; border: 1px solid rgba(255,255,255,0.3); cursor: pointer;">
                🔑 Sign In to Portal
              </button>
            </div>

            <!-- Key Trust Statistics Bar -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 12px;">
              <div>
                <div style="font-size: 1.2rem; font-weight: 800; color: #FFD2BA;">₹3,420 Cr</div>
                <div style="font-size: 0.7rem; color: #CBD5E1;">Annual Tribal Outlay</div>
              </div>
              <div>
                <div style="font-size: 1.2rem; font-weight: 800; color: #A3E6BE;">18.4 Lakh</div>
                <div style="font-size: 0.7rem; color: #CBD5E1;">ST Beneficiaries</div>
              </div>
              <div>
                <div style="font-size: 1.2rem; font-weight: 800; color: #93C5FD;">100% Direct DBT</div>
                <div style="font-size: 0.7rem; color: #CBD5E1;">Aadhaar-Seeded Bank Pay</div>
              </div>
              <div>
                <div style="font-size: 1.2rem; font-weight: 800; color: #FDE68A;">14 Languages</div>
                <div style="font-size: 0.7rem; color: #CBD5E1;">Regional & Tribal Voice</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Main Schemes Catalog with Category Dropdown & State Filters -->
        <section id="schemesSection" style="margin-bottom: 32px;">
          <div style="background: white; border: 1px solid var(--border-light); border-radius: 12px; padding: 18px; box-shadow: var(--shadow-sm); margin-bottom: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
              <div>
                <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--gov-navy); margin: 0 0 2px;">
                  🏛️ Available National & State Scholarships
                </h2>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
                  Showing official scholarships funded by Ministry of Tribal Affairs (MoTA) and State Welfare Departments.
                </p>
              </div>

              <!-- Filter Dropdowns -->
              <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                <div>
                  <label style="display: block; font-size: 0.7rem; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Scheme Type / Level:</label>
                  <select id="publicCategoryDropdown" class="gov-select-styled" style="min-width: 170px; padding: 5px 8px; font-size: 0.82rem;">
                    <option value="ALL" ${this.selectedSchemeCategory === 'ALL' ? 'selected' : ''}>All Scholarship Types (${schemes.length})</option>
                    <option value="Pre-Matric" ${this.selectedSchemeCategory === 'Pre-Matric' ? 'selected' : ''}>Pre-Matric (Class 9 & 10)</option>
                    <option value="Post-Matric" ${this.selectedSchemeCategory === 'Post-Matric' ? 'selected' : ''}>Post-Matric (Class 11 to PhD)</option>
                    <option value="Top Class" ${this.selectedSchemeCategory === 'Top Class' ? 'selected' : ''}>Top Class (Premier IIT/NIT/IIM)</option>
                    <option value="National Overseas" ${this.selectedSchemeCategory === 'National Overseas' ? 'selected' : ''}>National Overseas (Masters/PhD Abroad)</option>
                  </select>
                </div>

                <div>
                  <label style="display: block; font-size: 0.7rem; font-weight: 700; color: var(--text-muted); margin-bottom: 2px;">Filter by State / UT:</label>
                  <select id="publicStateFilter" class="gov-select-styled" style="min-width: 150px; padding: 5px 8px; font-size: 0.82rem;">
                    ${states.map(st => `<option value="${st}" ${this.selectedStateFilter === st ? 'selected' : ''}>${st === 'ALL' ? 'All States (Central & State)' : st}</option>`).join('')}
                  </select>
                </div>
              </div>
            </div>

            <!-- Quick Pill Category Buttons -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button class="scheme-filter-btn ${this.selectedSchemeCategory === 'ALL' ? 'active' : ''}" data-cat="ALL">All Schemes (${schemes.length})</button>
              <button class="scheme-filter-btn ${this.selectedSchemeCategory === 'Pre-Matric' ? 'active' : ''}" data-cat="Pre-Matric">Pre-Matric (School 9-10)</button>
              <button class="scheme-filter-btn ${this.selectedSchemeCategory === 'Post-Matric' ? 'active' : ''}" data-cat="Post-Matric">Post-Matric (College/Univ)</button>
              <button class="scheme-filter-btn ${this.selectedSchemeCategory === 'Top Class' ? 'active' : ''}" data-cat="Top Class">Top Class (Premier Inst)</button>
              <button class="scheme-filter-btn ${this.selectedSchemeCategory === 'National Overseas' ? 'active' : ''}" data-cat="National Overseas">Overseas Fellowships</button>
            </div>
          </div>

          <!-- Schemes Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 16px;">
            ${filteredSchemes.map(s => this.renderPublicSchemeCard(s)).join('')}
          </div>
        </section>

        <!-- Footer -->
        <footer style="border-top: 1px solid var(--border-light); padding: 18px 0; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
          <p style="margin-bottom: 4px;">Ministry of Tribal Affairs • Government of India • National Scholarship Division</p>
          <p style="margin: 0;">Problem Statement ID: 26238 | Digital Personal Data Protection Act, 2023</p>
        </footer>
      </div>
    `;
  }

  renderPublicSchemeCard(scheme) {
    const isCentral = scheme.type === 'Central' || scheme.state === 'Central';
    return `
      <div class="scheme-card" style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
            <span class="badge ${isCentral ? 'badge-sanctioned' : 'badge-verified'}" style="font-size: 0.68rem;">
              ${isCentral ? '🏛️ Central Sector' : `📍 State: ${scheme.state}`}
            </span>
            <span style="font-size: 0.7rem; font-weight: 700; color: #046A38; background: #EDFAF2; padding: 2px 6px; border-radius: 4px;">
              🟢 Active 2026-27
            </span>
          </div>

          <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 4px; line-height: 1.3;">
            ${scheme.name}
          </h3>
          
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 10px;">
            Level: <strong>${scheme.level || 'All'}</strong> | Code: <strong>${scheme.id}</strong>
          </div>

          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: 12px;">
            ${scheme.description || 'Comprehensive financial grant covering tuition, maintenance allowance, and study materials for eligible Scheduled Tribe students.'}
          </p>

          <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 6px; padding: 10px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="font-size: 0.72rem; color: var(--text-muted);">Max Grant:</span>
              <strong style="font-size: 0.88rem; color: var(--gov-blue-primary);">${scheme.maxAmount ? `₹${scheme.maxAmount.toLocaleString('en-IN')}/year` : 'Full Tuition + ₹2.5L Allowance'}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="font-size: 0.72rem; color: var(--text-muted);">Income Limit:</span>
              <span style="font-size: 0.75rem; font-weight: 600; color: var(--text-main);">${scheme.incomeCeiling || '₹2.50 Lakh / Year'}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="font-size: 0.72rem; color: var(--text-muted);">Deadline:</span>
              <span style="font-size: 0.75rem; font-weight: 700; color: #B91C1C;">31 Oct 2026</span>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 8px;">
          <button class="btn btn-outline-scheme" data-scheme-id="${scheme.id}" style="flex: 1; padding: 6px; border: 1px solid var(--border-strong); background: white; border-radius: 6px; font-weight: 600; font-size: 0.78rem; cursor: pointer;">
            📋 Guidelines
          </button>
          <button class="btn btn-apply-public" data-scheme-id="${scheme.id}" style="flex: 1; padding: 6px; background: var(--gov-blue-primary); color: white; border: none; border-radius: 6px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
            🚀 Apply Now
          </button>
        </div>
      </div>
    `;
  }

  attachPublicPortalEvents() {
    const btnExplore = document.getElementById('btnHeroExplore');
    if (btnExplore) {
      btnExplore.onclick = () => {
        const sec = document.getElementById('schemesSection');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      };
    }
    const btnReg = document.getElementById('btnHeroRegister');
    if (btnReg) btnReg.onclick = () => this.openRegistrationModal();
    const btnLogin = document.getElementById('btnHeroLogin');
    if (btnLogin) btnLogin.onclick = () => this.openLoginModal();

    const catDropdown = document.getElementById('publicCategoryDropdown');
    if (catDropdown) {
      catDropdown.onchange = (e) => {
        this.selectedSchemeCategory = e.target.value;
        this.render();
      };
    }

    const stateSelect = document.getElementById('publicStateFilter');
    if (stateSelect) {
      stateSelect.onchange = (e) => {
        this.selectedStateFilter = e.target.value;
        this.render();
      };
    }

    document.querySelectorAll('.scheme-filter-btn').forEach(btn => {
      btn.onclick = (e) => {
        this.selectedSchemeCategory = e.currentTarget.getAttribute('data-cat');
        this.render();
      };
    });

    document.querySelectorAll('.btn-outline-scheme').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-scheme-id');
        this.openSchemeDetailsModal(id);
      };
    });

    document.querySelectorAll('.btn-apply-public').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-scheme-id');
        this.openRegistrationModal(id);
      };
    });
  }

  // ==========================================================================
  // 2. AUTHENTICATION & LOGIN MODAL
  // ==========================================================================
  openLoginModal(targetSchemeId = null) {
    const modalWrapper = document.getElementById('modalWrapper');
    if (!modalWrapper) return;

    modalWrapper.innerHTML = `
      <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(7, 24, 44, 0.75); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;">
        <div class="modal-card" style="background: white; border-radius: 14px; width: 100%; max-width: 500px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); overflow: hidden; animation: modalPop 0.25s ease-out;">
          
          <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #FFD2BA; text-transform: uppercase;">Ministry of Tribal Affairs</div>
              <h2 style="font-size: 1.2rem; font-weight: 800; margin: 0;">Portal Sign In</h2>
            </div>
            <button id="btnCloseLoginModal" style="background: rgba(255,255,255,0.15); border: none; color: white; font-size: 1.1rem; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">✕</button>
          </div>

          <div style="display: grid; grid-template-columns: repeat(5, 1fr); background: #F1F5F9; border-bottom: 1px solid var(--border-light); padding: 4px;">
            <button class="login-tab-btn active" data-role="student" style="padding: 8px 2px; font-size: 0.72rem; font-weight: 700; border: none; background: white; border-radius: 6px; cursor: pointer; color: var(--gov-navy);">🎓 Student</button>
            <button class="login-tab-btn" data-role="institute" style="padding: 8px 2px; font-size: 0.72rem; font-weight: 700; border: none; background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-muted);">🏫 Institute</button>
            <button class="login-tab-btn" data-role="verification" style="padding: 8px 2px; font-size: 0.72rem; font-weight: 700; border: none; background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-muted);">🛡️ Officer</button>
            <button class="login-tab-btn" data-role="admin" style="padding: 8px 2px; font-size: 0.72rem; font-weight: 700; border: none; background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-muted);">🏛️ Admin</button>
            <button class="login-tab-btn" data-role="parent" style="padding: 8px 2px; font-size: 0.72rem; font-weight: 700; border: none; background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-muted);">👨‍👩‍👧 Parent</button>
          </div>

          <div style="padding: 20px;">
            <div id="loginRoleBanner" style="background: #EEF4FF; border: 1px solid #C7D9FB; padding: 8px 10px; border-radius: 6px; font-size: 0.8rem; color: #1338BE; font-weight: 600; margin-bottom: 14px;">
              🎓 Student Sign In: Enter your OTR Number, APAAR ID, or Registered Mobile
            </div>

            <form id="portalLoginForm">
              <div style="margin-bottom: 10px;">
                <label id="loginIdLabel" style="display: block; font-size: 0.78rem; font-weight: 700; color: var(--text-main); margin-bottom: 3px;">Student ID / OTR / Mobile</label>
                <input type="text" id="loginIdentifier" class="gov-select-styled" value="ST202600124" style="width: 100%; padding: 8px; font-size: 0.88rem;" required />
              </div>

              <div style="margin-bottom: 14px;">
                <label style="display: block; font-size: 0.78rem; font-weight: 700; color: var(--text-main); margin-bottom: 3px;">Password</label>
                <input type="password" id="loginPassword" class="gov-select-styled" value="password123" style="width: 100%; padding: 8px; font-size: 0.88rem;" required />
              </div>

              <button type="submit" class="btn" style="width: 100%; background: var(--gov-blue-primary); color: white; font-weight: 800; padding: 10px; border-radius: 6px; font-size: 0.92rem; border: none; cursor: pointer;">
                Sign In to Dashboard →
              </button>
            </form>

            <div style="margin-top: 16px; border-top: 1px solid var(--border-light); padding-top: 12px;">
              <div style="font-size: 0.7rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px; text-align: center;">
                ⚡ Fast 1-Click Demo Profiles
              </div>
              <div id="demoPresetsContainer" style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
                <button type="button" class="btn-demo-preset" data-id="ST202600124" data-role="student" style="text-align: left; padding: 6px 8px; background: #F8FAFC; border: 1px solid var(--border-strong); border-radius: 6px; font-size: 0.75rem; cursor: pointer;">
                  <strong style="display: block; color: var(--gov-navy);">🎓 Arun Kumar (College)</strong>
                  <span style="font-size: 0.68rem; color: var(--text-muted);">B.Tech IT • Theni, TN</span>
                </button>
                <button type="button" class="btn-demo-preset" data-id="ST202600125" data-role="student" style="text-align: left; padding: 6px 8px; background: #F8FAFC; border: 1px solid var(--border-strong); border-radius: 6px; font-size: 0.75rem; cursor: pointer;">
                  <strong style="display: block; color: var(--gov-navy);">🎓 Priya Kumar (School)</strong>
                  <span style="font-size: 0.68rem; color: var(--text-muted);">Class 10 • Megamalai</span>
                </button>
              </div>
            </div>

            <div style="text-align: center; margin-top: 12px; font-size: 0.8rem; color: var(--text-secondary);">
              New student applying for first time? 
              <a href="javascript:void(0)" id="linkOpenRegisterFromLogin" style="color: var(--gov-blue-primary); font-weight: 700; text-decoration: underline;">
                Register Here
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    let selectedRole = 'student';
    const form = document.getElementById('portalLoginForm');
    const roleBanner = document.getElementById('loginRoleBanner');
    const idLabel = document.getElementById('loginIdLabel');
    const idInput = document.getElementById('loginIdentifier');
    const demoContainer = document.getElementById('demoPresetsContainer');

    const roleConfig = {
      student: {
        banner: '🎓 Student Sign In: Enter your OTR Number, APAAR ID, or Registered Mobile',
        label: 'Student ID / OTR / Mobile',
        defaultId: 'ST202600124',
        presets: [
          { name: '🎓 Arun Kumar (College)', sub: 'B.Tech IT • Theni, TN', id: 'ST202600124' },
          { name: '🎓 Priya Kumar (School)', sub: 'Class 10 • Megamalai', id: 'ST202600125' }
        ]
      },
      institute: {
        banner: '🏫 Institute Nodal Officer Sign In: Enter AISHE Code or Institute ID',
        label: 'Institute AISHE Code / Username',
        defaultId: 'INST001',
        presets: [
          { name: '🏫 K. Ramakrishnan Engg', sub: 'AISHE: C-25148 • Tiruchirappalli', id: 'INST001' },
          { name: '🏫 GTRS Megamalai School', sub: 'UDISE: 33250100412 • Theni', id: 'INST002' }
        ]
      },
      verification: {
        banner: '🛡️ State Verification Officer Sign In: State Welfare Verification Desk',
        label: 'Officer ID / SSO Token',
        defaultId: 'SVO-TN-108',
        presets: [
          { name: '🛡️ S. Meenakshi', sub: 'State Nodal Officer • Tamil Nadu', id: 'SVO-TN-108' }
        ]
      },
      admin: {
        banner: '🏛️ MoTA National Admin Sign In: Directorate of Tribal Scholarships',
        label: 'MoTA Executive ID',
        defaultId: 'MOTA-OFF-042',
        presets: [
          { name: '🏛️ Dr. Rajeshwar Singh', sub: 'Joint Secretary • MoTA New Delhi', id: 'MOTA-OFF-042' }
        ]
      },
      parent: {
        banner: '👨‍👩‍👧 Parent / Guardian Sign In: Track your child’s scholarship and DBT credit',
        label: 'Parent Mobile Number / Email',
        defaultId: 'ramesh.kumar.theni@gmail.com',
        presets: [
          { name: '👨‍👩‍👧 Ramesh Kumar', sub: 'Father of Arun & Priya Kumar', id: 'ramesh.kumar.theni@gmail.com' }
        ]
      }
    };

    document.querySelectorAll('.login-tab-btn').forEach(tab => {
      tab.onclick = (e) => {
        document.querySelectorAll('.login-tab-btn').forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--text-muted)';
        });
        const target = e.currentTarget;
        target.classList.add('active');
        target.style.background = 'white';
        target.style.color = 'var(--gov-navy)';

        selectedRole = target.getAttribute('data-role');
        const cfg = roleConfig[selectedRole];
        if (cfg) {
          roleBanner.innerHTML = cfg.banner;
          idLabel.textContent = cfg.label;
          idInput.value = cfg.defaultId;

          demoContainer.innerHTML = cfg.presets.map(p => `
            <button type="button" class="btn-demo-preset" data-id="${p.id}" data-role="${selectedRole}" style="text-align: left; padding: 6px 8px; background: #F8FAFC; border: 1px solid var(--border-strong); border-radius: 6px; font-size: 0.75rem; cursor: pointer;">
              <strong style="display: block; color: var(--gov-navy);">${p.name}</strong>
              <span style="font-size: 0.68rem; color: var(--text-muted);">${p.sub}</span>
            </button>
          `).join('');

          this.attachDemoPresetClicks(idInput);
        }
      };
    });

    this.attachDemoPresetClicks(idInput);

    form.onsubmit = (e) => {
      e.preventDefault();
      try {
        const identifier = idInput.value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!identifier) {
          this.showToast('Please enter your ID or username.', 'error');
          return;
        }

        // Perform login — auth.login always returns {success:true} for demo
        const result = this.auth.login(identifier, password, selectedRole);

        if (result && result.success) {
          // Clear the modal before rendering dashboard
          const mw = document.getElementById('modalWrapper');
          if (mw) mw.innerHTML = '';
          this.showToast(`✅ Signed in successfully as ${selectedRole.toUpperCase()}`, 'success');
          this.render();
        } else {
          this.showToast('Login failed. Please check your credentials.', 'error');
        }
      } catch (err) {
        console.error('Login error:', err);
        this.showToast('An error occurred during login. Please try again.', 'error');
      }
    };

    const btnClose = document.getElementById('btnCloseLoginModal');
    if (btnClose) btnClose.onclick = () => { modalWrapper.innerHTML = ''; };

    const linkReg = document.getElementById('linkOpenRegisterFromLogin');
    if (linkReg) {
      linkReg.onclick = () => {
        modalWrapper.innerHTML = '';
        this.openRegistrationModal();
      };
    }
  }

  // ==========================================================================
  // 3. TWO-TRACK REGISTRATION MODAL
  // ==========================================================================
  openRegistrationModal(targetSchemeId = null) {
    const modalWrapper = document.getElementById('modalWrapper');
    if (!modalWrapper) return;

    modalWrapper.innerHTML = `
      <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(7, 24, 44, 0.75); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;">
        <div class="modal-card" style="background: white; border-radius: 14px; width: 100%; max-width: 660px; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 40px rgba(0,0,0,0.3); animation: modalPop 0.25s ease-out;">
          
          <div style="background: linear-gradient(135deg, #046A38, #0B2545); color: white; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #A3E6BE; text-transform: uppercase;">Ministry of Tribal Affairs</div>
              <h2 style="font-size: 1.2rem; font-weight: 800; margin: 0;">New Student Scholarship Registration</h2>
            </div>
            <button id="btnCloseRegModal" style="background: rgba(255,255,255,0.15); border: none; color: white; font-size: 1.1rem; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">✕</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; background: #F1F5F9; border-bottom: 1px solid var(--border-light); padding: 4px;">
            <button id="tabRegSchool" class="active" style="padding: 10px; font-size: 0.82rem; font-weight: 700; border: none; background: white; border-radius: 6px; cursor: pointer; color: var(--gov-navy);">
              🏫 School Student (Class 9 & 10 Pre-Matric)
            </button>
            <button id="tabRegCollege" style="padding: 10px; font-size: 0.82rem; font-weight: 700; border: none; background: transparent; border-radius: 6px; cursor: pointer; color: var(--text-muted);">
              🎓 College / Higher Ed (Post-Matric / Top Class)
            </button>
          </div>

          <div style="padding: 20px;">
            <form id="studentRegistrationForm">
              <input type="hidden" id="regTrackType" value="school" />

              <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">1. Identity & Contact Details</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Full Name (as in Aadhaar) *</label>
                    <input type="text" id="regName" class="gov-select-styled" value="Rajesh Soren" style="width: 100%;" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Gender *</label>
                    <select id="regGender" class="gov-select-styled" style="width: 100%;">
                      <option value="Male" selected>Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Mobile (Aadhaar Linked) *</label>
                    <input type="tel" id="regMobile" class="gov-select-styled" value="+91 98765 43210" style="width: 100%;" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Email ID</label>
                    <input type="email" id="regEmail" class="gov-select-styled" value="rajesh.soren@gmail.com" style="width: 100%;" />
                  </div>
                </div>
              </div>

              <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">2. Tribal Domicile & Income</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">State of Domicile *</label>
                    <select id="regState" class="gov-select-styled" style="width: 100%;">
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Jharkhand" selected>Jharkhand</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Assam">Assam</option>
                    </select>
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">District *</label>
                    <input type="text" id="regDistrict" class="gov-select-styled" value="Ranchi" style="width: 100%;" required />
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">ST Sub-Tribe *</label>
                    <input type="text" id="regSubTribe" class="gov-select-styled" value="Santhal (ST)" style="width: 100%;" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Annual Family Income (₹) *</label>
                    <input type="number" id="regIncome" class="gov-select-styled" value="180000" style="width: 100%;" required />
                  </div>
                </div>
              </div>

              <div id="dynamicAcademicBox" style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                <h4 id="academicBoxTitle" style="font-size: 0.88rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">
                  3. School Details (Class 9 / 10)
                </h4>
                
                <div style="margin-bottom: 8px;">
                  <label id="lblInstName" style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">School Name & UDISE Code *</label>
                  <input type="text" id="regInstitution" class="gov-select-styled" value="Govt Tribal Residential School, Ranchi (UDISE: 20010412)" style="width: 100%;" required />
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <div>
                    <label id="lblCourse" style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Class / Standard *</label>
                    <input type="text" id="regCourse" class="gov-select-styled" value="Class 10 (Secondary)" style="width: 100%;" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Marks Percentage (%) *</label>
                    <input type="number" step="0.1" id="regMarks" class="gov-select-styled" value="86.5" style="width: 100%;" required />
                  </div>
                </div>
              </div>

              <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
                <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">4. Bank Account (Aadhaar Seeded for Direct DBT)</h4>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Bank Name *</label>
                    <input type="text" id="regBank" class="gov-select-styled" value="State Bank of India" style="width: 100%;" required />
                  </div>
                  <div>
                    <label style="display: block; font-size: 0.75rem; font-weight: 700; margin-bottom: 2px;">Bank IFSC Code *</label>
                    <input type="text" id="regIFSC" class="gov-select-styled" value="SBIN0000167" style="width: 100%;" required />
                  </div>
                </div>
              </div>

              <div style="display: flex; gap: 10px;">
                <button type="button" id="btnCancelReg" class="btn" style="flex: 1; background: #F1F5F9; color: var(--text-main); border: 1px solid var(--border-strong); padding: 9px; border-radius: 6px; font-weight: 700; cursor: pointer;">Cancel</button>
                <button type="submit" class="btn" style="flex: 2; background: #046A38; color: white; border: none; padding: 9px; border-radius: 6px; font-weight: 800; font-size: 0.92rem; cursor: pointer;">
                  ✓ Register & Open Student Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    const tabSchool = document.getElementById('tabRegSchool');
    const tabCollege = document.getElementById('tabRegCollege');
    const trackInput = document.getElementById('regTrackType');
    const acadTitle = document.getElementById('academicBoxTitle');
    const lblInst = document.getElementById('lblInstName');
    const inputInst = document.getElementById('regInstitution');
    const lblCourse = document.getElementById('lblCourse');
    const inputCourse = document.getElementById('regCourse');

    if (tabSchool && tabCollege) {
      tabSchool.onclick = () => {
        tabSchool.style.background = 'white';
        tabSchool.style.color = 'var(--gov-navy)';
        tabCollege.style.background = 'transparent';
        tabCollege.style.color = 'var(--text-muted)';
        trackInput.value = 'school';
        acadTitle.textContent = '3. School Details (Class 9 / 10)';
        lblInst.textContent = 'School Name & UDISE Code *';
        inputInst.value = 'Govt Tribal Residential School, Ranchi (UDISE: 20010412)';
        lblCourse.textContent = 'Class / Standard *';
        inputCourse.value = 'Class 10 (Secondary)';
      };

      tabCollege.onclick = () => {
        tabCollege.style.background = 'white';
        tabCollege.style.color = 'var(--gov-navy)';
        tabSchool.style.background = 'transparent';
        tabSchool.style.color = 'var(--text-muted)';
        trackInput.value = 'college';
        acadTitle.textContent = '3. College & Higher Education Details';
        lblInst.textContent = 'College / University Name & AISHE Code *';
        inputInst.value = 'Birsa Institute of Technology, Sindri (AISHE: C-4412)';
        lblCourse.textContent = 'Degree Course Enrolled *';
        inputCourse.value = 'B.Tech Information Technology';
      };
    }

    const form = document.getElementById('studentRegistrationForm');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const data = {
          name: document.getElementById('regName').value,
          gender: document.getElementById('regGender').value,
          mobile: document.getElementById('regMobile').value,
          email: document.getElementById('regEmail').value,
          state: document.getElementById('regState').value,
          district: document.getElementById('regDistrict').value,
          subTribe: document.getElementById('regSubTribe').value,
          income: document.getElementById('regIncome').value,
          institution: document.getElementById('regInstitution').value,
          course: document.getElementById('regCourse').value,
          marks: document.getElementById('regMarks').value,
          bankName: document.getElementById('regBank').value,
          ifsc: document.getElementById('regIFSC').value,
          bankLast4: '8834'
        };

        const result = this.auth.registerStudent(data);

        const track = trackInput.value;
        const newApp = {
          id: 'APP-2026-' + Math.floor(100 + Math.random() * 900),
          schemeId: track === 'school' ? 'SCH001' : 'SCH002',
          schemeName: track === 'school' ? 'Pre-Matric Scholarship for ST Students' : 'Post-Matric Scholarship for ST Students',
          studentId: result.student.id,
          studentName: result.student.name,
          state: result.student.state,
          district: result.student.district,
          course: result.student.course,
          institution: result.student.institution,
          marks: parseFloat(result.student.marksPercentage) || 85.0,
          status: 'SUBMITTED',
          currentStage: 'Institute Verification',
          sanctionAmount: track === 'school' ? 7000 : 28000,
          submittedDate: new Date().toLocaleDateString('en-GB')
        };
        this.db.data.applications.unshift(newApp);
        this.db.save();

        modalWrapper.innerHTML = '';
        this.showToast(`🎉 Registration Successful! Welcome, ${result.student.name}`, 'success');
        this.render();
      };
    }

    const btnClose = document.getElementById('btnCloseRegModal');
    if (btnClose) btnClose.onclick = () => { modalWrapper.innerHTML = ''; };
    const btnCancel = document.getElementById('btnCancelReg');
    if (btnCancel) btnCancel.onclick = () => { modalWrapper.innerHTML = ''; };
  }

  // ==========================================================================
  // 4. SCHEME GUIDELINES MODAL
  // ==========================================================================
  openSchemeDetailsModal(schemeId) {
    const modalWrapper = document.getElementById('modalWrapper');
    if (!modalWrapper) return;

    const schemes = this.getSchemes();
    const scheme = schemes.find(s => s.id === schemeId) || schemes[0] || {
      id: schemeId,
      name: 'Post-Matric Scholarship Scheme for ST Students',
      maxAmount: 28000,
      incomeCeiling: '₹2.50 Lakh / Year',
      description: 'Comprehensive financial assistance for Scheduled Tribe students pursuing higher education.'
    };

    modalWrapper.innerHTML = `
      <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(7, 24, 44, 0.75); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;">
        <div class="modal-card" style="background: white; border-radius: 14px; width: 100%; max-width: 560px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); overflow: hidden; animation: modalPop 0.25s ease-out;">
          <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 0.72rem; font-weight: 700; color: #FFD2BA; text-transform: uppercase;">Official Scheme Guidelines</div>
              <h2 style="font-size: 1.15rem; font-weight: 800; margin: 0;">${scheme.name}</h2>
            </div>
            <button id="btnCloseSchemeModal" style="background: rgba(255,255,255,0.15); border: none; color: white; font-size: 1.1rem; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">✕</button>
          </div>

          <div style="padding: 20px;">
            <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 14px;">
              ${scheme.description}
            </p>

            <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 12px; margin-bottom: 16px;">
              <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 6px;">📋 Scheme Terms & Financial Grant</h4>
              <ul style="margin: 0; padding-left: 18px; font-size: 0.8rem; color: var(--text-main); line-height: 1.55;">
                <li><strong>Target:</strong> Scheduled Tribe (ST) students in recognized institutions.</li>
                <li><strong>Income Ceiling:</strong> Total family annual income must not exceed <strong>${scheme.incomeCeiling || '₹2,50,000'}</strong>.</li>
                <li><strong>Financial Grant:</strong> Up to <strong>₹${(scheme.maxAmount || 28000).toLocaleString('en-IN')} / year</strong> + 100% Tuition covered.</li>
                <li><strong>Disbursement:</strong> 100% Direct Benefit Transfer (DBT) directly to Bank via PFMS.</li>
              </ul>
            </div>

            <div style="display: flex; gap: 8px;">
              <button id="btnCloseSchemeModal2" class="btn" style="flex: 1; background: #F1F5F9; color: var(--text-main); border: 1px solid var(--border-strong); padding: 8px; border-radius: 6px; font-weight: 700; cursor: pointer;">Close</button>
              <button id="btnApplyFromSchemeModal" class="btn" style="flex: 2; background: var(--gov-blue-primary); color: white; border: none; padding: 8px; border-radius: 6px; font-weight: 800; cursor: pointer;">
                🚀 Proceed to Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const btnClose1 = document.getElementById('btnCloseSchemeModal');
    if (btnClose1) btnClose1.onclick = () => { modalWrapper.innerHTML = ''; };
    const btnClose2 = document.getElementById('btnCloseSchemeModal2');
    if (btnClose2) btnClose2.onclick = () => { modalWrapper.innerHTML = ''; };

    const btnApply = document.getElementById('btnApplyFromSchemeModal');
    if (btnApply) {
      btnApply.onclick = () => {
        modalWrapper.innerHTML = '';
        if (this.db.getIsLoggedIn()) {
          this.activeStudentTab = 'schemes';
          this.render();
        } else {
          this.openRegistrationModal(scheme.id);
        }
      };
    }
  }

  // ==========================================================================
  // 5. ROLE-BASED DASHBOARDS
  // ==========================================================================
  renderRoleDashboard(role) {
    if (role === 'student') return this.renderStudentDashboard();
    if (role === 'institute') return this.renderInstituteDashboard();
    if (role === 'verification') return this.renderOfficerDashboard();
    if (role === 'admin') return this.renderAdminDashboard();
    if (role === 'parent') return this.renderParentDashboard();
    return this.renderStudentDashboard();
  }

  attachRoleDashboardEvents(role) {
    if (role === 'student') this.attachStudentDashboardEvents();
    if (role === 'institute') this.attachInstituteDashboardEvents();
    if (role === 'verification') this.attachOfficerDashboardEvents();
    if (role === 'admin') this.attachAdminDashboardEvents();
    if (role === 'parent') this.attachParentDashboardEvents();
  }

  // ==========================================================================
  // A. STUDENT DASHBOARD
  // ==========================================================================
  renderStudentDashboard() {
    const student = this.db.getCurrentStudent();
    const applications = this.db.data.applications.filter(a => a.studentId === student.id) || [];
    const openSchemes = this.getSchemes();

    return `
      <div class="student-dashboard-wrapper">
        <div style="background: linear-gradient(135deg, #07182C 0%, #0B2545 60%, #1338BE 100%); color: white; padding: 18px 22px; border-radius: 12px; margin-bottom: 18px; box-shadow: var(--shadow-sm); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 16px; font-size: 0.72rem; font-weight: 700; color: #FFD2BA; margin-bottom: 4px;">
              🇮🇳 ST Category • ${student.stSubTribe || 'Malayali ST'} • ${student.state}
            </div>
            <h1 style="font-size: 1.5rem; font-weight: 800; margin: 0 0 2px;">
              Welcome, ${student.name} 👋
            </h1>
            <p style="font-size: 0.82rem; color: #E2E8F0; margin: 0;">
              Student ID: <strong>${student.id}</strong> | APAAR ID: <strong>${student.apaarId || '9845-2147-3690'}</strong> | ${student.institution}
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 8px; text-align: right;">
            <div style="font-size: 0.7rem; color: #A3E6BE; font-weight: 700;">DBT Bank Linked</div>
            <div style="font-size: 0.88rem; font-weight: 800;">${student.bankName || 'State Bank of India'}</div>
            <div style="font-size: 0.7rem; opacity: 0.85;">A/C: ${student.bankAccount || '•••• 4512'}</div>
          </div>
        </div>

        <div style="display: flex; gap: 6px; border-bottom: 2px solid var(--border-light); margin-bottom: 18px; overflow-x: auto; padding-bottom: 2px;">
          <button class="student-nav-tab ${this.activeStudentTab === 'overview' ? 'active' : ''}" data-tab="overview">📊 My Applications (${applications.length})</button>
          <button class="student-nav-tab ${this.activeStudentTab === 'schemes' ? 'active' : ''}" data-tab="schemes">🚀 Available Schemes (${openSchemes.length})</button>
          <button class="student-nav-tab ${this.activeStudentTab === 'dbt' ? 'active' : ''}" data-tab="dbt">💳 DBT Payments & Bank</button>
          <button class="student-nav-tab ${this.activeStudentTab === 'documents' ? 'active' : ''}" data-tab="documents">📂 DigiLocker Documents</button>
          <button class="student-nav-tab ${this.activeStudentTab === 'profile' ? 'active' : ''}" data-tab="profile">👤 Student Profile</button>
        </div>

        <div id="studentTabContent">
          ${this.renderStudentTabContent(student, applications, openSchemes)}
        </div>
      </div>
    `;
  }

  renderStudentTabContent(student, applications, openSchemes) {
    if (this.activeStudentTab === 'overview') {
      return `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 12px;">
            📝 My Submitted Scholarship Applications
          </h2>

          ${applications.length === 0 ? `
            <div style="background: white; border: 1px dashed var(--border-strong); border-radius: 10px; padding: 26px; text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 6px;">📋</div>
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 4px;">No Applications Yet</h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">Apply to eligible schemes with 1-click prefilled verified data.</p>
              <button id="btnGoToApplyTab" class="btn" style="background: var(--gov-blue-primary); color: white; font-weight: 700; padding: 7px 14px; border-radius: 6px; border: none; cursor: pointer;">
                Explore Available Schemes →
              </button>
            </div>
          ` : `
            <div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
              ${applications.map(app => this.renderApplicationTrackerCard(app)).join('')}
            </div>
          `}
        </div>
      `;
    }

    if (this.activeStudentTab === 'schemes') {
      return `
        <div>
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 12px;">
            🎯 Pre-Filled Instant Scholarship Applications
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 14px;">
            ${openSchemes.map(s => this.renderStudentSchemeCard(s)).join('')}
          </div>
        </div>
      `;
    }

    if (this.activeStudentTab === 'dbt') {
      return `
        <div>
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 12px;">
            💳 Direct Benefit Transfer (DBT) & Payment Records
          </h2>
          <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; margin-bottom: 16px; box-shadow: var(--shadow-sm);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span class="badge badge-verified">🟢 100% DBT Active</span>
                <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin: 4px 0 2px;">Primary Bank: ${student.bankName}</h3>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0;">Account: ${student.bankAccount} • IFSC: ${student.ifscCode}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (this.activeStudentTab === 'documents') {
      return `
        <div>
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 12px;">
            📂 DigiLocker Document Vault
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px;">
              <span class="badge badge-verified">✓ DigiLocker Verified</span>
              <h4 style="font-size: 0.9rem; font-weight: 700; margin: 6px 0 2px;">ST Community Certificate</h4>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Sub-Tribe: ${student.stSubTribe || 'Malayali ST'}</p>
            </div>
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px;">
              <span class="badge badge-verified">✓ Revenue Verified</span>
              <h4 style="font-size: 0.9rem; font-weight: 700; margin: 6px 0 2px;">Annual Income Certificate</h4>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0;">Income: ₹${student.familyIncome.toLocaleString('en-IN')}/yr</p>
            </div>
          </div>
        </div>
      `;
    }

    if (this.activeStudentTab === 'profile') {
      return `
        <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 18px; box-shadow: var(--shadow-sm);">
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 12px;">
            👤 Student Official Profile
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Name:</span><div style="font-weight: 700; font-size: 0.9rem;">${student.name}</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">APAAR ID:</span><div style="font-weight: 700; font-size: 0.9rem; color: var(--gov-blue-primary);">${student.apaarId}</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Institution:</span><div style="font-weight: 700; font-size: 0.9rem;">${student.institution}</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Course:</span><div style="font-weight: 700; font-size: 0.9rem;">${student.course}</div></div>
          </div>
        </div>
      `;
    }

    return '';
  }

  renderApplicationTrackerCard(app) {
    const isApproved = app.status === 'SANCTIONED' || app.status === 'APPROVED' || app.status === 'INSTITUTE_VERIFIED';
    return `
      <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 6px; margin-bottom: 10px;">
          <div>
            <span class="badge ${isApproved ? 'badge-verified' : 'badge-pending'}">${app.status || 'SUBMITTED'}</span>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin: 3px 0 2px;">${app.schemeName}</h3>
            <div style="font-size: 0.75rem; color: var(--text-muted);">
              App ID: <strong>${app.id}</strong> | Sanction Amount: <strong>₹${(app.sanctionAmount || 28000).toLocaleString('en-IN')}</strong>
            </div>
          </div>
        </div>

        <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 6px; padding: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="text-align: center; flex: 1;"><div style="width: 20px; height: 20px; background: #046A38; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2px; font-size: 0.65rem; font-weight: 700;">✓</div><span style="font-size: 0.65rem; font-weight: 700; color: #046A38;">Submitted</span></div>
            <div style="text-align: center; flex: 1;"><div style="width: 20px; height: 20px; background: #046A38; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2px; font-size: 0.65rem; font-weight: 700;">✓</div><span style="font-size: 0.65rem; font-weight: 700; color: #046A38;">Institute Verified</span></div>
            <div style="text-align: center; flex: 1;"><div style="width: 20px; height: 20px; background: var(--gov-blue-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2px; font-size: 0.65rem; font-weight: 700;">3</div><span style="font-size: 0.65rem; font-weight: 700; color: var(--gov-blue-primary);">State Sanction</span></div>
            <div style="text-align: center; flex: 1;"><div style="width: 20px; height: 20px; background: #E2E8F0; color: var(--text-muted); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2px; font-size: 0.65rem; font-weight: 700;">4</div><span style="font-size: 0.65rem; font-weight: 700; color: var(--text-muted);">DBT Disbursed</span></div>
          </div>
        </div>
      </div>
    `;
  }

  renderStudentSchemeCard(scheme) {
    return `
      <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span class="badge badge-sanctioned" style="font-size: 0.65rem;">${scheme.type || 'Central Sector'}</span>
            <strong style="font-size: 0.85rem; color: var(--gov-green);">₹${(scheme.maxAmount || 28000).toLocaleString('en-IN')}/yr</strong>
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--gov-navy); margin: 0 0 4px;">${scheme.name}</h4>
          <p style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.35; margin-bottom: 10px;">
            ${scheme.description || 'Full financial grant for eligible Scheduled Tribe students.'}
          </p>
        </div>

        <button class="btn btn-apply-direct" data-scheme-id="${scheme.id}" style="width: 100%; background: var(--gov-blue-primary); color: white; border: none; padding: 7px; border-radius: 6px; font-weight: 700; font-size: 0.8rem; cursor: pointer;">
          ⚡ 1-Click Instant Apply
        </button>
      </div>
    `;
  }

  attachStudentDashboardEvents() {
    document.querySelectorAll('.student-nav-tab').forEach(tab => {
      tab.onclick = (e) => {
        this.activeStudentTab = e.currentTarget.getAttribute('data-tab');
        this.render();
      };
    });

    const btnGoApply = document.getElementById('btnGoToApplyTab');
    if (btnGoApply) {
      btnGoApply.onclick = () => {
        this.activeStudentTab = 'schemes';
        this.render();
      };
    }

    document.querySelectorAll('.btn-apply-direct').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-scheme-id');
        const schemes = this.getSchemes();
        const scheme = schemes.find(s => s.id === id) || { name: 'Tribal Scholarship' };
        const student = this.db.getCurrentStudent();

        const newApp = {
          id: 'APP-2026-' + Math.floor(100 + Math.random() * 900),
          schemeId: id,
          schemeName: scheme.name,
          studentId: student.id,
          studentName: student.name,
          state: student.state,
          district: student.district,
          course: student.course,
          institution: student.institution,
          marks: student.marksPercentage || 84.6,
          status: 'SUBMITTED',
          currentStage: 'Institute Verification',
          sanctionAmount: scheme.maxAmount || 28000,
          submittedDate: new Date().toLocaleDateString('en-GB')
        };

        this.db.data.applications.unshift(newApp);
        this.db.save();
        this.showToast(`🎉 Application for ${scheme.name} submitted! Forwarded to Institute Desk.`, 'success');
        this.activeStudentTab = 'overview';
        this.render();
      };
    });
  }

  // ==========================================================================
  // B. INSTITUTE DASHBOARD WITH 20+ DUMMY ITEMS FOR MANUAL REVIEW & APPROVAL
  // ==========================================================================
  renderInstituteDashboard() {
    const apps = this.db.data.applications || [];
    const pendingApps = apps.filter(a => a.status === 'SUBMITTED' || a.status === 'UNDER_VERIFICATION');
    const verifiedApps = apps.filter(a => a.status === 'INSTITUTE_VERIFIED' || a.status === 'SANCTIONED');

    return `
      <div class="institute-dashboard-wrapper">
        <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 18px 22px; border-radius: 12px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 16px; font-size: 0.72rem; font-weight: 700; color: #A3E6BE; margin-bottom: 4px;">
              🏫 Institute Nodal Desk • AISHE: C-25148
            </div>
            <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 2px;">K. Ramakrishnan College of Engineering</h1>
            <p style="font-size: 0.8rem; color: #E2E8F0; margin: 0;">Institutional Verification Officer: Dr. V. R. Natarajan • Tiruchirappalli, TN</p>
          </div>
        </div>

        <div style="display: flex; gap: 6px; border-bottom: 2px solid var(--border-light); margin-bottom: 18px;">
          <button class="student-nav-tab ${this.activeInstituteTab === 'pending' ? 'active' : ''}" id="tabInstPending">
            ⏳ Manual Verification Queue (${pendingApps.length})
          </button>
          <button class="student-nav-tab ${this.activeInstituteTab === 'verified' ? 'active' : ''}" id="tabInstVerified">
            ✓ Verified Registry (${verifiedApps.length})
          </button>
          <button class="student-nav-tab ${this.activeInstituteTab === 'profile' ? 'active' : ''}" id="tabInstProfile">
            🏫 Institute Profile & AISHE Data
          </button>
        </div>

        <div id="instituteTabContent">
          ${this.activeInstituteTab === 'pending' ? `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; overflow: hidden; box-shadow: var(--shadow-sm);">
              <div style="padding: 12px 16px; border-bottom: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-size: 1rem; font-weight: 700; color: var(--gov-navy); margin: 0;">
                  Manual Verification Queue (${pendingApps.length} Pending Scrutiny)
                </h3>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Tier-1 Institutional Scrutiny</span>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead style="background: #F8FAFC; border-bottom: 1px solid var(--border-light); font-weight: 700;">
                  <tr>
                    <th style="padding: 8px 12px;">App ID</th>
                    <th style="padding: 8px 12px;">Student Name & ID</th>
                    <th style="padding: 8px 12px;">Course / Class</th>
                    <th style="padding: 8px 12px;">Marks %</th>
                    <th style="padding: 8px 12px;">Scheme</th>
                    <th style="padding: 8px 12px; text-align: center;">Manual Verification Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${pendingApps.length === 0 ? `
                    <tr><td colspan="6" style="padding: 24px; text-align: center; color: var(--text-muted);">✓ All applications reviewed and verified!</td></tr>
                  ` : pendingApps.map(a => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 8px 12px; font-weight: 700;">${a.id}</td>
                      <td style="padding: 8px 12px;"><strong>${a.studentName}</strong><br/><span style="font-size: 0.7rem; color: var(--text-muted);">${a.studentId} (${a.state || 'Tamil Nadu'})</span></td>
                      <td style="padding: 8px 12px;">${a.course || 'B.Tech IT'}</td>
                      <td style="padding: 8px 12px; font-weight: 700; color: var(--gov-blue-primary);">${a.marks || 84.6}%</td>
                      <td style="padding: 8px 12px;">${a.schemeName}</td>
                      <td style="padding: 8px 12px; text-align: center;">
                        <button class="btn btn-sm btn-manual-approve" data-app-id="${a.id}" style="background: var(--gov-green); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-weight: 700; font-size: 0.75rem; cursor: pointer; margin-right: 4px;">
                          ✓ Approve & E-Sign
                        </button>
                        <button class="btn btn-sm btn-manual-reject" data-app-id="${a.id}" style="background: #B91C1C; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-weight: 700; font-size: 0.75rem; cursor: pointer;">
                          ✕ Query
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : this.activeInstituteTab === 'verified' ? `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 10px;">Verified Students Registry</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead style="background: #F8FAFC; border-bottom: 1px solid var(--border-light);">
                  <tr>
                    <th style="padding: 8px 12px;">App ID</th>
                    <th style="padding: 8px 12px;">Student Name</th>
                    <th style="padding: 8px 12px;">Sanction Amount</th>
                    <th style="padding: 8px 12px;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${verifiedApps.map(v => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 8px 12px; font-weight: 700;">${v.id}</td>
                      <td style="padding: 8px 12px;">${v.studentName}</td>
                      <td style="padding: 8px 12px; font-weight: 700; color: var(--gov-green);">₹${(v.sanctionAmount || 28000).toLocaleString('en-IN')}</td>
                      <td style="padding: 8px 12px;"><span class="badge badge-verified">✓ ${v.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 18px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 12px;">Institution AISHE Profile</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
                <div><span style="font-size: 0.72rem; color: var(--text-muted);">Institution Name:</span><div style="font-weight: 700;">K. Ramakrishnan College of Engineering</div></div>
                <div><span style="font-size: 0.72rem; color: var(--text-muted);">AISHE Code:</span><div style="font-weight: 700; color: var(--gov-blue-primary);">C-25148</div></div>
                <div><span style="font-size: 0.72rem; color: var(--text-muted);">Affiliated University:</span><div style="font-weight: 700;">Anna University, Chennai</div></div>
                <div><span style="font-size: 0.72rem; color: var(--text-muted);">District & State:</span><div style="font-weight: 700;">Tiruchirappalli, Tamil Nadu</div></div>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }

  attachInstituteDashboardEvents() {
    const tabPend = document.getElementById('tabInstPending');
    if (tabPend) tabPend.onclick = () => { this.activeInstituteTab = 'pending'; this.render(); };
    const tabVer = document.getElementById('tabInstVerified');
    if (tabVer) tabVer.onclick = () => { this.activeInstituteTab = 'verified'; this.render(); };
    const tabProf = document.getElementById('tabInstProfile');
    if (tabProf) tabProf.onclick = () => { this.activeInstituteTab = 'profile'; this.render(); };

    document.querySelectorAll('.btn-manual-approve').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-app-id');
        const match = this.db.data.applications.find(a => a.id === id);
        if (match) {
          match.status = 'INSTITUTE_VERIFIED';
          match.currentStage = 'State Verification';
          this.db.save();
          this.showToast(`✓ Manually verified and digitally signed Application ${id}`, 'success');
          this.render();
        }
      };
    });

    document.querySelectorAll('.btn-manual-reject').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-app-id');
        this.showToast(`⚠️ Query notice dispatched to student for Application ${id}`, 'info');
      };
    });
  }

  // ==========================================================================
  // C. STATE VERIFICATION OFFICER DASHBOARD WITH 20+ ITEMS READY FOR TIER-2
  // ==========================================================================
  renderOfficerDashboard() {
    const apps = this.db.data.applications || [];
    const scrutinyQueue = apps.filter(a => a.status === 'INSTITUTE_VERIFIED' || a.status === 'UNDER_VERIFICATION');
    const sanctionedQueue = apps.filter(a => a.status === 'SANCTIONED');

    return `
      <div class="officer-dashboard-wrapper">
        <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 18px 22px; border-radius: 12px; margin-bottom: 18px;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 16px; font-size: 0.72rem; font-weight: 700; color: #FFD2BA; margin-bottom: 4px;">
            🛡️ State Nodal Verification Desk • Tamil Nadu
          </div>
          <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 2px;">Officer S. Meenakshi (SVO-TN-108)</h1>
          <p style="font-size: 0.8rem; color: #E2E8F0; margin: 0;">Directorate of Tribal Welfare, Government of Tamil Nadu</p>
        </div>

        <div style="display: flex; gap: 6px; border-bottom: 2px solid var(--border-light); margin-bottom: 18px;">
          <button class="student-nav-tab ${this.activeOfficerTab === 'scrutiny' ? 'active' : ''}" id="tabOfficerScrutiny">
            🔍 Tier-2 State Scrutiny Queue (${scrutinyQueue.length})
          </button>
          <button class="student-nav-tab ${this.activeOfficerTab === 'sanctioned' ? 'active' : ''}" id="tabOfficerSanctioned">
            📜 State Sanction Orders (${sanctionedQueue.length})
          </button>
        </div>

        <div>
          ${this.activeOfficerTab === 'scrutiny' ? `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; box-shadow: var(--shadow-sm);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin: 0;">
                  Applications Awaiting State Sanction (${scrutinyQueue.length})
                </h3>
                <button id="btnReleaseStateSanction" class="btn" style="background: var(--gov-blue-primary); color: white; font-weight: 800; padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; border: none; cursor: pointer;">
                  🏛️ Batch Sanction All (${scrutinyQueue.length})
                </button>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead style="background: #F8FAFC; border-bottom: 1px solid var(--border-light); font-weight: 700;">
                  <tr>
                    <th style="padding: 8px 12px;">App ID</th>
                    <th style="padding: 8px 12px;">Student Name</th>
                    <th style="padding: 8px 12px;">District</th>
                    <th style="padding: 8px 12px;">Scheme</th>
                    <th style="padding: 8px 12px;">Sanction Amount</th>
                    <th style="padding: 8px 12px; text-align: center;">State Clearance</th>
                  </tr>
                </thead>
                <tbody>
                  ${scrutinyQueue.length === 0 ? `
                    <tr><td colspan="6" style="padding: 20px; text-align: center; color: var(--text-muted);">✓ All applications cleared and sanctioned!</td></tr>
                  ` : scrutinyQueue.map(a => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 8px 12px; font-weight: 700;">${a.id}</td>
                      <td style="padding: 8px 12px;"><strong>${a.studentName}</strong></td>
                      <td style="padding: 8px 12px;">${a.district || 'Theni'}</td>
                      <td style="padding: 8px 12px;">${a.schemeName}</td>
                      <td style="padding: 8px 12px; font-weight: 700; color: var(--gov-green);">₹${(a.sanctionAmount || 28000).toLocaleString('en-IN')}</td>
                      <td style="padding: 8px 12px; text-align: center;">
                        <button class="btn btn-sm btn-clear-state-single" data-app-id="${a.id}" style="background: var(--gov-green); color: white; border: none; padding: 4px 8px; border-radius: 4px; font-weight: 700; font-size: 0.75rem; cursor: pointer;">
                          ✓ Sanction
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 10px;">Sanctioned Applications Dispatched to PFMS</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead style="background: #F8FAFC; border-bottom: 1px solid var(--border-light);">
                  <tr>
                    <th style="padding: 8px 12px;">App ID</th>
                    <th style="padding: 8px 12px;">Student Name</th>
                    <th style="padding: 8px 12px;">Sanction Order</th>
                    <th style="padding: 8px 12px;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${sanctionedQueue.map(s => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 8px 12px; font-weight: 700;">${s.id}</td>
                      <td style="padding: 8px 12px;">${s.studentName}</td>
                      <td style="padding: 8px 12px; font-family: monospace;">MOTA/SAN/2026/TN/${s.id}</td>
                      <td style="padding: 8px 12px;"><span class="badge badge-verified">✓ SANCTIONED</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `;
  }

  attachOfficerDashboardEvents() {
    const tabScrutiny = document.getElementById('tabOfficerScrutiny');
    if (tabScrutiny) tabScrutiny.onclick = () => { this.activeOfficerTab = 'scrutiny'; this.render(); };
    const tabSanctioned = document.getElementById('tabOfficerSanctioned');
    if (tabSanctioned) tabSanctioned.onclick = () => { this.activeOfficerTab = 'sanctioned'; this.render(); };

    const btnSanction = document.getElementById('btnReleaseStateSanction');
    if (btnSanction) {
      btnSanction.onclick = () => {
        this.db.data.applications.forEach(a => {
          if (a.status === 'INSTITUTE_VERIFIED' || a.status === 'UNDER_VERIFICATION') {
            a.status = 'SANCTIONED';
          }
        });
        this.db.save();
        this.showToast('✓ State Sanction Orders generated and pushed to PFMS DBT gateway!', 'success');
        this.render();
      };
    }

    document.querySelectorAll('.btn-clear-state-single').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.getAttribute('data-app-id');
        const match = this.db.data.applications.find(a => a.id === id);
        if (match) {
          match.status = 'SANCTIONED';
          this.db.save();
          this.showToast(`✓ Application ${id} sanctioned and cleared!`, 'success');
          this.render();
        }
      };
    });
  }

  // ==========================================================================
  // D. MOTA ADMIN DASHBOARD WITH STEP-BY-STEP DBT RELEASE WIZARD
  // ==========================================================================
  renderAdminDashboard() {
    const allApps = this.db.data.applications || [];

    return `
      <div class="admin-dashboard-wrapper">
        <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 18px 22px; border-radius: 12px; margin-bottom: 18px;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 16px; font-size: 0.72rem; font-weight: 700; color: #FFD2BA; margin-bottom: 4px;">
            🏛️ National Executive Command • Ministry of Tribal Affairs (MoTA)
          </div>
          <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 2px;">National Tribal Scholarship Directorate</h1>
          <p style="font-size: 0.8rem; color: #E2E8F0; margin: 0;">Officer: Dr. Rajeshwar Singh (Joint Secretary) • Shastri Bhawan, New Delhi</p>
        </div>

        <div style="display: flex; gap: 6px; border-bottom: 2px solid var(--border-light); margin-bottom: 18px;">
          <button class="student-nav-tab ${this.activeAdminTab === 'overview' ? 'active' : ''}" id="tabAdminOverview">
            📊 National Analytics & Fund Outlay
          </button>
          <button class="student-nav-tab ${this.activeAdminTab === 'all-applications' ? 'active' : ''}" id="tabAdminApps">
            📋 Master Applications Registry (${allApps.length})
          </button>
          <button class="student-nav-tab ${this.activeAdminTab === 'dbt-release' ? 'active' : ''}" id="tabAdminDBT">
            ⚡ PFMS DBT Batch Disbursal
          </button>
        </div>

        <div>
          ${this.activeAdminTab === 'overview' ? `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 18px;">
              <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; box-shadow: var(--shadow-sm);">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Total Budget Outlay</span>
                <div style="font-size: 1.4rem; font-weight: 800; color: var(--gov-navy); margin-top: 2px;">₹3,420.50 Cr</div>
                <span style="font-size: 0.7rem; color: var(--gov-green); font-weight: 700;">+12.4% vs FY 2025</span>
              </div>
              <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; box-shadow: var(--shadow-sm);">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">Beneficiaries Disbursed</span>
                <div style="font-size: 1.4rem; font-weight: 800; color: #046A38; margin-top: 2px;">18,42,109</div>
                <span style="font-size: 0.7rem; color: var(--gov-green); font-weight: 700;">96.8% Success Rate</span>
              </div>
              <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; box-shadow: var(--shadow-sm);">
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">PVTG Target Group</span>
                <div style="font-size: 1.4rem; font-weight: 800; color: #B45309; margin-top: 2px;">1,42,500</div>
                <span style="font-size: 0.7rem; color: var(--text-muted);">PM-JANMAN Mission</span>
              </div>
            </div>
          ` : this.activeAdminTab === 'all-applications' ? `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 16px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 10px;">All India Applications Master Registry (${allApps.length})</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead style="background: #F8FAFC; border-bottom: 1px solid var(--border-light);">
                  <tr>
                    <th style="padding: 8px 12px;">App ID</th>
                    <th style="padding: 8px 12px;">Student Name</th>
                    <th style="padding: 8px 12px;">State & District</th>
                    <th style="padding: 8px 12px;">Scheme</th>
                    <th style="padding: 8px 12px;">Amount</th>
                    <th style="padding: 8px 12px;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${allApps.map(a => `
                    <tr style="border-bottom: 1px solid var(--border-light);">
                      <td style="padding: 8px 12px; font-weight: 700;">${a.id}</td>
                      <td style="padding: 8px 12px;"><strong>${a.studentName}</strong></td>
                      <td style="padding: 8px 12px;">${a.state || 'Tamil Nadu'} (${a.district || 'Theni'})</td>
                      <td style="padding: 8px 12px;">${a.schemeName}</td>
                      <td style="padding: 8px 12px; font-weight: 700; color: var(--gov-green);">₹${(a.sanctionAmount || 28000).toLocaleString('en-IN')}</td>
                      <td style="padding: 8px 12px;"><span class="badge ${a.status === 'SANCTIONED' ? 'badge-verified' : 'badge-pending'}">${a.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : `
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 18px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">National DBT Disbursal Execution (PFMS Bridge)</h3>
              <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 14px;">Direct payment sanction release for 1,42,000 verified ST students across 28 states.</p>
              
              <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Batch Reference:</span>
                  <strong style="font-size: 0.85rem;">PFMS-DBT-2026-MOTA-BATCH-04</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Total Batch Amount:</span>
                  <strong style="font-size: 0.95rem; color: var(--gov-blue-primary);">₹284.50 Crore</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span style="font-size: 0.8rem; color: var(--text-muted);">Total ST Beneficiaries:</span>
                  <strong style="font-size: 0.85rem; color: var(--gov-green);">1,42,000 Students</strong>
                </div>
              </div>

              <button id="btnOpenDBTWizard" class="btn" style="background: var(--gov-saffron); color: white; font-weight: 800; padding: 10px 20px; border-radius: 6px; font-size: 0.9rem; border: none; cursor: pointer;">
                ⚡ Launch Step-by-Step PFMS DBT Disbursal Wizard →
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  }

  attachAdminDashboardEvents() {
    const tabOver = document.getElementById('tabAdminOverview');
    if (tabOver) tabOver.onclick = () => { this.activeAdminTab = 'overview'; this.render(); };
    const tabApps = document.getElementById('tabAdminApps');
    if (tabApps) tabApps.onclick = () => { this.activeAdminTab = 'all-applications'; this.render(); };
    const tabDBT = document.getElementById('tabAdminDBT');
    if (tabDBT) tabDBT.onclick = () => { this.activeAdminTab = 'dbt-release'; this.render(); };

    const btnLaunch = document.getElementById('btnOpenDBTWizard');
    if (btnLaunch) {
      btnLaunch.onclick = () => this.openStepByStepDBTWizard();
    }
  }

  // ==========================================================================
  // STEP-BY-STEP PFMS BATCH DBT DISBURSAL WIZARD MODAL (₹284.50 Cr)
  // ==========================================================================
  openStepByStepDBTWizard() {
    const modalWrapper = document.getElementById('modalWrapper');
    if (!modalWrapper) return;

    let step = 1;

    const renderStepContent = (currentStep) => {
      if (currentStep === 1) {
        return `
          <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
            <div style="font-weight: 700; color: var(--gov-navy); font-size: 0.95rem; margin-bottom: 8px;">
              Step 1: PFMS Aadhaar Payment Bridge (APB) Account Reconciliation
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.82rem; color: var(--text-main); line-height: 1.6;">
              <li>✓ Total ST Beneficiary Accounts Scanned: <strong>1,42,000 Records</strong></li>
              <li>✓ NPCI Aadhaar Mapping Active: <strong>100% (1,42,000 / 1,42,000)</strong></li>
              <li>✓ Inactive / Dormant Bank Accounts: <strong>0 (Reconciled)</strong></li>
              <li>✓ PFMS Pre-Validation Score: <strong style="color: var(--gov-green);">100% PASS</strong></li>
            </ul>
          </div>
          <button id="btnDBTNextStep" class="btn" style="width: 100%; background: var(--gov-blue-primary); color: white; font-weight: 800; padding: 10px; border-radius: 6px; font-size: 0.9rem; border: none; cursor: pointer;">
            Proceed to Treasury Digital Signature (DSC) →
          </button>
        `;
      } else if (currentStep === 2) {
        return `
          <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
            <div style="font-weight: 700; color: var(--gov-navy); font-size: 0.95rem; margin-bottom: 8px;">
              Step 2: Dual Treasury Authorization & Officer E-Signature
            </div>
            <div style="margin-bottom: 8px;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Sanction Order No:</span>
              <div style="font-weight: 700; font-size: 0.85rem; font-family: monospace;">MOTA/DBT/2026-27/BATCH-04/SAN-88190</div>
            </div>
            <div style="margin-bottom: 8px;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Principal Signatory:</span>
              <div style="font-weight: 700; font-size: 0.85rem; color: var(--gov-green);">✓ Dr. Rajeshwar Singh (Joint Secretary, MoTA - DSC Token Active)</div>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Finance Advisor Signatory:</span>
              <div style="font-weight: 700; font-size: 0.85rem; color: var(--gov-green);">✓ Sh. K. S. Ramanathan (FA MoTA - DSC Token Active)</div>
            </div>
          </div>
          <button id="btnDBTNextStep" class="btn" style="width: 100%; background: #046A38; color: white; font-weight: 800; padding: 10px; border-radius: 6px; font-size: 0.9rem; border: none; cursor: pointer;">
            Authorize & Push Batch to RBI APBS Gateway →
          </button>
        `;
      } else if (currentStep === 3) {
        return `
          <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 8px; padding: 18px; margin-bottom: 14px; text-align: center;">
            <div style="font-weight: 800; color: var(--gov-navy); font-size: 1rem; margin-bottom: 8px;">
              Step 3: Disbursing ₹284.50 Crore via RBI APBS
            </div>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 14px;">Pushed to Reserve Bank of India National Automated Clearing House (NACH).</p>
            
            <div style="width: 100%; height: 12px; background: #E2E8F0; border-radius: 10px; overflow: hidden; margin-bottom: 10px;">
              <div id="dbtProgressBar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #046A38, var(--gov-saffron)); transition: width 0.4s ease;"></div>
            </div>
            <div id="dbtProgressText" style="font-size: 0.85rem; font-weight: 700; color: var(--gov-blue-primary);">Processing 0 / 1,42,000 accounts...</div>
          </div>
        `;
      } else if (currentStep === 4) {
        return `
          <div style="background: #EDFAF2; border: 1px solid var(--gov-green-border); border-radius: 8px; padding: 16px; margin-bottom: 14px; text-align: center;">
            <div style="font-size: 2.2rem; margin-bottom: 4px;">🎉</div>
            <div style="font-weight: 800; color: #046A38; font-size: 1.15rem; margin-bottom: 4px;">
              PFMS Batch Disbursement Completed Successfully!
            </div>
            <p style="font-size: 0.85rem; color: #0F172A; line-height: 1.5; margin-bottom: 12px;">
              <strong>₹284,50,00,000</strong> has been credited to <strong>1,42,000 Scheduled Tribe students</strong> across 28 States & UTs.
            </p>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-family: monospace;">
              PFMS URN: PFMS2026MOTA99281048 | Delivery: 100% SUCCESS
            </div>
          </div>
          <button id="btnDBTClose" class="btn" style="width: 100%; background: var(--gov-navy); color: white; font-weight: 800; padding: 10px; border-radius: 6px; font-size: 0.9rem; border: none; cursor: pointer;">
            ✓ Download PFMS Sanction Voucher & Close
          </button>
        `;
      }
    };

    const renderModal = () => {
      modalWrapper.innerHTML = `
        <div class="modal-backdrop" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(7, 24, 44, 0.75); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 20px;">
          <div class="modal-card" style="background: white; border-radius: 14px; width: 100%; max-width: 540px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); overflow: hidden; animation: modalPop 0.25s ease-out;">
            
            <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.72rem; font-weight: 700; color: #FFD2BA; text-transform: uppercase;">Treasury Disbursement Engine</div>
                <h2 style="font-size: 1.2rem; font-weight: 800; margin: 0;">PFMS DBT Execution (Stage ${step}/4)</h2>
              </div>
              <button id="btnCloseDBTWizard" style="background: rgba(255,255,255,0.15); border: none; color: white; font-size: 1.1rem; width: 28px; height: 28px; border-radius: 50%; cursor: pointer;">✕</button>
            </div>

            <div style="padding: 20px;">
              ${renderStepContent(step)}
            </div>
          </div>
        </div>
      `;

      const btnClose = document.getElementById('btnCloseDBTWizard');
      if (btnClose) btnClose.onclick = () => { modalWrapper.innerHTML = ''; };

      const btnNext = document.getElementById('btnDBTNextStep');
      if (btnNext) {
        btnNext.onclick = () => {
          step++;
          renderModal();
          if (step === 3) {
            const bar = document.getElementById('dbtProgressBar');
            const txt = document.getElementById('dbtProgressText');
            setTimeout(() => { if (bar) bar.style.width = '35%'; if (txt) txt.textContent = 'Transmitting to RBI APBS: 49,700 / 1,42,000 accounts...'; }, 400);
            setTimeout(() => { if (bar) bar.style.width = '75%'; if (txt) txt.textContent = 'Disbursing: 1,06,500 / 1,42,000 accounts (₹213.3 Cr)...'; }, 1000);
            setTimeout(() => {
              if (bar) bar.style.width = '100%';
              if (txt) txt.textContent = '1,42,000 / 1,42,000 Accounts Credited!';
              setTimeout(() => {
                step = 4;
                renderModal();
                this.showToast('🚀 ₹284.50 Cr DBT Disbursed successfully to 1,42,000 ST students!', 'success');
              }, 500);
            }, 1600);
          }
        };
      }

      const btnDone = document.getElementById('btnDBTClose');
      if (btnDone) {
        btnDone.onclick = () => {
          modalWrapper.innerHTML = '';
          this.render();
        };
      }
    };

    renderModal();
  }

  // ==========================================================================
  // E. PARENT DASHBOARD
  // ==========================================================================
  renderParentDashboard() {
    const students = this.db.data.students.filter(s => s.id === 'ST202600124' || s.id === 'ST202600125');
    const selectedStudent = this.db.data.students.find(s => s.id === this.selectedParentStudentId) || students[0];
    const studentApps = this.db.data.applications.filter(a => a.studentId === selectedStudent.id);

    return `
      <div class="parent-dashboard-wrapper">
        <div style="background: linear-gradient(135deg, #07182C, #0B2545); color: white; padding: 18px 22px; border-radius: 12px; margin-bottom: 18px;">
          <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 16px; font-size: 0.72rem; font-weight: 700; color: #FFD2BA; margin-bottom: 4px;">
            👨‍👩‍👧 Parent / Guardian Portal
          </div>
          <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 2px;">Welcome, Ramesh Kumar</h1>
          <p style="font-size: 0.8rem; color: #E2E8F0; margin: 0;">Theni District, Tamil Nadu • Linked Wards: 2 Children</p>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          ${students.map(s => `
            <button class="btn-parent-switch-child ${this.selectedParentStudentId === s.id ? 'active' : ''}" data-student-id="${s.id}" style="padding: 8px 14px; background: ${this.selectedParentStudentId === s.id ? 'var(--gov-blue-primary)' : 'white'}; color: ${this.selectedParentStudentId === s.id ? 'white' : 'var(--gov-navy)'}; border: 1px solid var(--border-strong); border-radius: 6px; font-weight: 700; font-size: 0.82rem; cursor: pointer;">
              🎓 ${s.name} (${s.id})
            </button>
          `).join('')}
        </div>

        <div style="background: white; border: 1px solid var(--border-light); border-radius: 10px; padding: 18px; box-shadow: var(--shadow-sm); margin-bottom: 18px;">
          <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--gov-navy); margin-bottom: 10px;">
            Ward Overview: ${selectedStudent.name}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 16px;">
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Enrolled Institution:</span><div style="font-weight: 700;">${selectedStudent.institution}</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Course / Class:</span><div style="font-weight: 700;">${selectedStudent.course}</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Academic Score:</span><div style="font-weight: 700; color: var(--gov-blue-primary);">${selectedStudent.marksPercentage}%</div></div>
            <div><span style="font-size: 0.72rem; color: var(--text-muted);">Direct Bank Credit:</span><div style="font-weight: 700; color: var(--gov-green);">✓ ${selectedStudent.bankName} (${selectedStudent.bankAccount})</div></div>
          </div>

          <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 8px;">Scholarship Application & Status Timeline</h4>
          ${studentApps.map(a => `
            <div style="background: #F8FAFC; border: 1px solid var(--border-light); border-radius: 6px; padding: 12px; margin-bottom: 8px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 2px;">
                <strong style="color: var(--gov-navy); font-size: 0.9rem;">${a.schemeName}</strong>
                <span class="badge badge-verified">✓ ${a.status}</span>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">
                Sanctioned Grant: <strong>₹${(a.sanctionAmount || 28000).toLocaleString('en-IN')}</strong> • Direct DBT Credited to Student Account.
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  attachParentDashboardEvents() {
    document.querySelectorAll('.btn-parent-switch-child').forEach(btn => {
      btn.onclick = (e) => {
        this.selectedParentStudentId = e.currentTarget.getAttribute('data-student-id');
        this.render();
      };
    });
  }

  // ==========================================================================
  // F. MOBILE PHONE SIMULATOR
  // ==========================================================================
  renderMobileStudentSimulator() {
    const student = this.db.getCurrentStudent();
    const applications = this.db.data.applications.filter(a => a.studentId === student.id) || [];
    const openSchemes = this.getSchemes();

    return `
      <div style="display: flex; justify-content: center; padding: 16px 0;">
        <div style="width: 100%; max-width: 390px; background: #FFFFFF; border: 8px solid #1E293B; border-radius: 34px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.35); overflow: hidden; min-height: 680px; display: flex; flex-direction: column;">
          
          <div style="background: #0B2545; color: white; padding: 8px 16px 4px; display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 600;">
            <span>09:41</span>
            <div style="width: 90px; height: 12px; background: #07182C; border-radius: 0 0 10px 10px; margin: -8px auto 0;"></div>
            <span>5G 📶 100% 🔋</span>
          </div>

          <div style="background: #0B2545; color: white; padding: 10px 16px; border-bottom: 2px solid var(--gov-saffron);">
            <div style="font-size: 0.65rem; color: #FFD2BA; font-weight: 700;">Ministry of Tribal Affairs</div>
            <div style="font-size: 1rem; font-weight: 800;">TRIBALONE Mobile</div>
          </div>

          <div style="flex: 1; padding: 12px; overflow-y: auto; background: #F8FAFC;">
            <div style="background: white; border: 1px solid var(--border-light); border-radius: 8px; padding: 10px; margin-bottom: 10px; box-shadow: var(--shadow-sm);">
              <div style="font-size: 0.7rem; font-weight: 700; color: var(--gov-green);">🟢 Active Student</div>
              <h3 style="font-size: 1rem; font-weight: 700; margin: 2px 0; color: var(--gov-navy);">${student.name}</h3>
              <p style="font-size: 0.75rem; color: var(--text-secondary); margin: 0;">${student.course}</p>
            </div>

            <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gov-navy); margin-bottom: 6px;">My Applications</h4>
            ${applications.map(a => `
              <div style="background: white; border: 1px solid var(--border-light); border-radius: 6px; padding: 8px; margin-bottom: 6px;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--gov-navy);">${a.schemeName}</div>
                <div style="font-size: 0.7rem; color: var(--gov-blue-primary); font-weight: 600; margin-top: 2px;">Status: ${a.status}</div>
              </div>
            `).join('')}

            <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--gov-navy); margin: 10px 0 6px;">Available Schemes</h4>
            ${openSchemes.slice(0, 2).map(s => `
              <div style="background: white; border: 1px solid var(--border-light); border-radius: 6px; padding: 8px; margin-bottom: 6px;">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--gov-navy);">${s.name}</div>
                <div style="font-size: 0.75rem; color: var(--gov-green); font-weight: 700; margin: 2px 0 6px;">Grant: ₹${(s.maxAmount||28000).toLocaleString('en-IN')}/yr</div>
                <button class="btn btn-sm btn-apply-direct" data-scheme-id="${s.id}" style="width: 100%; background: var(--gov-blue-primary); color: white; border: none; padding: 5px; border-radius: 4px; font-weight: 700; font-size: 0.72rem; cursor: pointer;">
                  Apply Now
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  attachMobileStudentEvents() {
    this.attachStudentDashboardEvents();
  }

  /**
   * attachDemoPresetClicks — Binds click handlers to demo preset buttons in the login modal.
   * Called each time role tabs are switched to refresh the buttons for the new role.
   * When a preset button is clicked, it pre-fills the identifier input with the demo ID
   * and also switches the role tab automatically so login works in one click.
   *
   * @param {HTMLInputElement} idInput - The identifier input field in the login form.
   */
  attachDemoPresetClicks(idInput) {
    // Find all demo preset buttons rendered inside the modal
    const presetBtns = document.querySelectorAll('.btn-demo-preset');
    presetBtns.forEach(btn => {
      btn.onclick = (e) => {
        // Get the demo ID stored in data-id attribute
        const demoId = e.currentTarget.getAttribute('data-id');
        const demoRole = e.currentTarget.getAttribute('data-role');

        if (demoId && idInput) {
          // Pre-fill the login identifier field with the demo account's ID
          idInput.value = demoId;
        }

        // If a role is specified, also click the matching role tab to sync the UI
        if (demoRole) {
          const matchingTab = document.querySelector(`.login-tab-btn[data-role="${demoRole}"]`);
          if (matchingTab) {
            matchingTab.click();
          }
        }
      };
    });
  }
}

// Immediate execution or on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.tribalOneApp = new TribalOneApp();
  });
} else {
  window.tribalOneApp = new TribalOneApp();
}
