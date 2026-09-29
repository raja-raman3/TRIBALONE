/**
 * TRIBALONE - Authentication & Session Manager
 * Ministry of Tribal Affairs (MoTA)
 * Supports Multi-Role Authentication: Student, Institute, Verification Officer, Admin, Parent
 */

import { db } from './db.js';

class AuthManager {
  constructor() {
    this.storageKey = 'tribalone_auth_session';
    this.init();
  }

  init() {
    let savedSession = null;
    try {
      if (typeof localStorage !== 'undefined') {
        savedSession = localStorage.getItem(this.storageKey);
      }
    } catch (e) {
      console.warn('LocalStorage not accessible in AuthManager init:', e);
    }

    if (savedSession) {
      try {
        const session = JSON.parse(savedSession);
        if (session && session.role) {
          db.setIsLoggedIn(true);
          db.setCurrentRole(session.role);
          if (session.studentId) {
            db.setCurrentStudent(session.studentId);
          }
        }
      } catch (e) {
        console.warn('Failed to parse auth session:', e);
      }
    }
  }

  // Pre-configured demo accounts for instantaneous testing
  getDemoAccounts() {
    return [
      {
        role: 'student',
        roleLabel: '🎓 Tribal Student (College)',
        name: 'Arun Kumar',
        identifier: 'ST202600124',
        password: 'password123',
        description: 'B.Tech IT • K. Ramakrishnan College • Theni, TN',
        studentId: 'ST202600124'
      },
      {
        role: 'student',
        roleLabel: '🎓 Tribal Student (School)',
        name: 'Priya Kumar',
        identifier: 'ST202600125',
        password: 'password123',
        description: 'Class 10 • Govt Tribal Residential School • Megamalai, TN',
        studentId: 'ST202600125'
      },
      {
        role: 'institute',
        roleLabel: '🏫 Institute Nodal Officer',
        name: 'Dr. V. R. Natarajan',
        identifier: 'INST001',
        password: 'password123',
        description: 'Principal / Nodal Desk • K. Ramakrishnan College of Engineering',
        institution: 'K. Ramakrishnan College of Engineering (AISHE: C-25148)'
      },
      {
        role: 'verification',
        roleLabel: '🛡️ State Verification Officer',
        name: 'S. Meenakshi',
        identifier: 'SVO-TN-108',
        password: 'password123',
        description: 'State Nodal Officer • Tribal Welfare Department, Tamil Nadu',
        state: 'Tamil Nadu'
      },
      {
        role: 'admin',
        roleLabel: '🏛️ MoTA National Admin',
        name: 'Dr. Rajeshwar Singh',
        identifier: 'MOTA-OFF-042',
        password: 'password123',
        description: 'Joint Secretary (Scholarships) • Shastri Bhawan, New Delhi',
        department: 'Ministry of Tribal Affairs'
      },
      {
        role: 'parent',
        roleLabel: '👨‍👩‍👧 Parent / Guardian',
        name: 'Ramesh Kumar',
        identifier: 'ramesh.kumar.theni@gmail.com',
        password: 'password123',
        description: 'Father of Arun & Priya Kumar • Theni District, TN',
        linkedStudents: ['ST202600124', 'ST202600125']
      }
    ];
  }

  login(identifier, password, roleHint = 'student') {
    identifier = (identifier || '').trim();
    const demoAccounts = this.getDemoAccounts();
    
    // Check demo match or loose match
    let match = demoAccounts.find(acc => 
      acc.identifier.toLowerCase() === identifier.toLowerCase() ||
      acc.role === roleHint
    );

    if (!match) {
      match = {
        role: roleHint,
        name: identifier || 'User',
        identifier: identifier || 'ID-1001',
        studentId: roleHint === 'student' ? 'ST202600124' : null
      };
    }

    const session = {
      isLoggedIn: true,
      role: match.role,
      name: match.name,
      identifier: match.identifier,
      studentId: match.studentId || (match.role === 'student' ? 'ST202600124' : null),
      loginTime: new Date().toISOString()
    };

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, JSON.stringify(session));
      }
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    db.setIsLoggedIn(true);
    db.setCurrentRole(match.role);
    if (session.studentId) {
      db.setCurrentStudent(session.studentId);
    }

    return { success: true, session };
  }

  logout() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(this.storageKey);
      }
    } catch (e) {
      console.warn('LocalStorage remove error:', e);
    }
    db.setIsLoggedIn(false);
    return { success: true };
  }

  isAuthenticated() {
    return db.getIsLoggedIn();
  }

  getCurrentSession() {
    let raw = null;
    try {
      if (typeof localStorage !== 'undefined') {
        raw = localStorage.getItem(this.storageKey);
      }
    } catch (e) {
      console.warn('LocalStorage get error:', e);
    }
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  registerStudent(formData) {
    const newId = 'ST2026' + Math.floor(10000 + Math.random() * 90000);
    const newStudent = {
      id: newId,
      name: formData.name || 'New Student',
      gender: formData.gender || 'Other',
      dob: formData.dob || '2005-01-01',
      mobile: formData.mobile || '+91 99999 99999',
      email: formData.email || `${newId.toLowerCase()}@tribalone.gov.in`,
      state: formData.state || 'Tamil Nadu',
      district: formData.district || 'District',
      category: 'ST',
      stSubTribe: formData.subTribe || 'ST Community',
      pvtg: formData.pvtg === 'yes',
      pvtgTribe: formData.pvtgTribe || null,
      institution: formData.institution || 'Government Institution',
      institutionType: formData.institutionType || 'College',
      course: formData.course || 'Undergraduate Degree',
      courseLevel: formData.courseLevel || 'Higher Education',
      academicYear: '2026-2027',
      currentYear: formData.currentYear || '1st Year',
      marksPercentage: parseFloat(formData.marks) || 78.5,
      familyIncome: parseInt(formData.income) || 180000,
      disabilityStatus: 'No',
      disabilityPercentage: 0,
      otrNumber: 'OTR2026' + Math.floor(100000 + Math.random() * 900000),
      otrStatus: 'VERIFIED',
      apaarId: `${Math.floor(1000+Math.random()*9000)}-${Math.floor(1000+Math.random()*9000)}-${Math.floor(1000+Math.random()*9000)}`,
      apaarStatus: 'VERIFIED',
      aadhaarLinked: true,
      bankAccount: '•••• •••• ' + (formData.bankLast4 || '7789'),
      bankName: formData.bankName || 'State Bank of India',
      ifscCode: formData.ifsc || 'SBIN0001000',
      dbtSeeded: true,
      profileCompletion: 100,
      verificationBadges: {
        identity: 'VERIFIED',
        stStatus: 'VERIFIED',
        pvtgStatus: formData.pvtg === 'yes' ? 'VERIFIED' : 'NOT APPLICABLE',
        income: 'VERIFIED',
        academic: 'VERIFIED',
        institution: 'VERIFIED'
      }
    };

    // Add to students list in db
    db.data.students.unshift(newStudent);
    db.saveToStorage();

    // Auto login
    this.login(newStudent.id, 'password123', 'student');
    db.setCurrentStudent(newId);

    return { success: true, student: newStudent };
  }
}

export const auth = new AuthManager();
