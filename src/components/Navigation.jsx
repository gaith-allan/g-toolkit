import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/toolkit">دليل الأدوات</Link></li>
        <li><Link to="/about">حول المشروع</Link></li>
        <li><Link to="/learning-paths">مسارات التعلم</Link></li>
        <li><Link to="/infrastructure-setup">إعداد البنية التحتية</Link></li>
        <li><Link to="/security-checklist">قائمة التحقق الأمني</Link></li>
        {/* Add links for other main sections here */}
      </ul>
    </nav>
  );
}

export default Navigation;
