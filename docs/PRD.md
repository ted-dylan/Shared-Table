# Shared Table (상생몰) — PRD 업데이트 (/st Overlay)

## 0. 목적
- 기존 코드/UI는 보존한다.
- /st 네임스페이스 안에서 신규 페이지를 구현한다.
- 목표: 제품 수준 IA, 디자인 최적화, 명확한 플로우 및 관리 기능 포함.

## 1. 라우트 (/st)
- 홈: `/st`
- Product Catalog: `/st/products`, `/st/products/[id]`
- Company Info: `/st/vendors`, `/st/vendors/[id]`
- Trading Guide: `/st/trading-guide`
- Support: `/st/support`
- About Us: `/st/about`
- Admin: `/st/admin`

## 2. Product Catalog (Korean Food Products)
- 디자인: 현재보다 여백 확대, 카드 간격 조정(그리드 spacing↑)
- 카피라이팅: 영문/한글 카피 고도화(예: "Discover Authentic Korean Flavors")
- 상세 페이지: 각 카드 클릭 시 `/st/products/[id]`로 이동
  - 상세 필드: 이미지, 제품명, 가격, 단위, 인증, 설명, 문의 CTA

## 3. Company Info
- 카피라이팅: 기업 소개 문구 고도화
- View Company: `/st/vendors/[id]` 상세 이동(회사 로고/개요/인증/대표 제품/Inquiry CTA)
- Inquiry 버튼: 클릭 시 **회사 문의 팝업** (이름/이메일/문의 내용 → 제출 시 console.log 목업)

## 4. Trading Guide
- 문의 플로우:
  1) 회사 선택 팝업 → vendor 선택
  2) 문의 폼 작성(이름, 이메일, 회사, 내용, 요구 MOQ 등)
  3) 저장(DB mock)
  4) 안내 문구 노출
- DB: `/lib/st/data/inquiries.ts`에 mock 저장
- 폼: 플레이스홀더(추후 회사 미팅 반영)

## 5. Support
- 폼 필드: 이름, 이메일, 회사, 문의 내용
- 제출 후: 팝업 안내 문구(예: "Your message has been received.")
- 저장: inquiries mock DB 동일 구조

## 6. About Us
- 페이지: `/st/about`
- 섹션: 미션 / 가치 / 연락처 / 파트너 로고
- 디자인: 공통 패널 스타일 유지

## 7. Admin (/st/admin)
- 목적: 상품·업체·문의 관리 대시보드(목업)
- 탭: Products / Vendors / Inquiries
- 기능(목업): 리스트 렌더링, 상태 토글(읽음/처리완료), 수정/삭제 버튼(console.log)
- 디자인: 다크 패널, 상단 탭 Nav, 테이블/카드 뷰 혼합

## 8. Global Design Parity
- /st 전 페이지 동일 톤 유지(배경 #0F141A, 패널 #24292F, radius ≥ 24)
- 칩/버튼/카드 스타일 `/st/_ui/panel.module.css` 공유
- 반응형: 모바일/태블릿/PC 대응

## 9. 수락 기준 (AC)
- Product Catalog: 간격/여백 개선, 상세 페이지 연결
- Company Info: View Company → 상세 이동, Inquiry 팝업 동작
- Trading Guide: 회사 선택 팝업 → 문의 폼 → DB 저장 → 안내 문구
- Support: 폼 제출 → 안내 팝업, DB 저장
- About Us: 페이지 존재, 기본 섹션 구현
- Admin: Products/Vendors/Inquiries 리스트 관리 화면 구현(목업 가능)
- 전 페이지 디자인 톤 일관 유지

