// 응답을 모을 곳. 둘 중 하나를 쓴다
// 1) 구글 폼(지금 쓰는 것): 파일 번호는 P01~P08 가운데 무작위, 응답은 폼에 연결된 구글 시트에 쌓인다
const FORM = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSdMCLGYfmYzNYNxM0ZwFQ89TQlzVBQ4n3ZMPxjaAA8LhQ_XqQ/formResponse',
  fields: {                       // 폼의 '양식 미리 작성' 링크에서 읽은 칸 번호(2026-11-04)
    file: 'entry.760290799',      // 파일번호
    assign: 'entry.418045770',    // 배정 방식
    earphones: 'entry.415686208', // 이어폰
    replay: 'entry.1749226286',   // 멈춤 또는 다시 듣기
    answers: 'entry.233440540',   // 응답(38칸, JSON)
    timing: 'entry.1482332827',   // 입력 시각(JSON)
    meta: 'entry.251813505'       // 기타(sid, 중단 횟수, 끝까지 들었는지, 기기, 시각. JSON)
  }
};
// 2) 구글 Apps Script 서버(서버/Code.gs): 파일 번호를 고르게 나눠 준다. 주소를 넣으면 폼 대신 이쪽을 쓴다
const ENDPOINT = '';
// 상품권 추첨 응모용 구글 폼(전화번호만 받는 따로 만든 폼). 비우면 완료 화면에 응모 칸이 나오지 않는다
const PRIZE_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScKy_aysCSsB3zdv3AFR2SX4jjdyZgiaY2XCnMkwlgGhU5VZg/viewform';
const AUDIO_VERSION = 'standard 2026-10-21';
