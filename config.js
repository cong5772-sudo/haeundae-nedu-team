// 대시보드 백엔드(Apps Script 웹앱) 주소. 비워두면 같은 폴더의 data.js(PC 미리보기용 사본)를 씁니다.
window.OPS_API = 'https://script.google.com/macros/s/AKfycbx4FZ4Hepd74g7nqlNUKeV0OQm7v1-cC0VZEyTkFkkmyD3HHxzldkyQSG2NOQXgFB5b/exec';

// 구글 로그인용 OAuth 클라이언트 ID (교육참석 대시보드와 같은 값). 서버 스크립트 속성 GOOGLE_CLIENT_ID 와 같아야 합니다.
window.OPS_GOOGLE_CLIENT_ID = '497800427820-0jftci511sots7lcfv2533hnfnnfudpp.apps.googleusercontent.com';

// 교육일정 관리 페이지: 간호교육 참석현황 대시보드와 같은 화면 모듈(schedule.js)을 불러와 사용합니다.
window.EDU_SCHED_JS = "https://haeundae-edu-attendance.vercel.app/schedule.js?v=1";
// 실제 실시 기록(참석 명단 기준)과 대조하기 위한 참석현황 대시보드 서버 주소(읽기 전용 공개 데이터)
window.EDU_DATA_API = "https://script.google.com/macros/s/AKfycbxJdmwrzWMXTeBzYbVusuafbGqDVyypC_VhpQv_nblTkFuVJA4XNtWBRhABfbTjFhD67Q/exec";
