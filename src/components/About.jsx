import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h2>حول المشروع</h2>
      <p>هذا المشروع هو نتاج تعاون بين غيث و Manus، بهدف إنشاء مرجع تقني متكامل.</p>
      <div className="tool-card">
        <h3>الميزات المخطط لها (30 ميزة)</h3>
        <ul>
          <li>التحول إلى React.</li>
          <li>600 أداة مصنفة.</li>
          <li>وظائف البحث والتصفية المتقدمة.</li>
          <li>الوضع الداكن (Dark Mode).</li>
          <li>مسارات التعلم وإعداد البنية التحتية.</li>
          <li>قائمة التحقق الأمني ومخططات استكشاف الأخطاء.</li>
          <li>وغيرها الكثير...</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
