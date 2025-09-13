# PRD 체크리스트 (/st Overlay)

## Phase 1 — 기본 구조 ✅ 완료
- [x] `config_st/nav.ts` 메뉴: Product Catalog / Company Info / Trading Guide / Support / About Us
- [x] `/st/page.tsx` 로고 href=`/st#hero` (히어로 섹션으로 스크롤)
- [x] `/st/page.tsx` 최상위 섹션 `id="hero"`
- [x] 오버레이에서 Contact 버튼 미노출 확인

## Phase 2 — Catalog & Vendors ✅ 완료
- [x] `/st/products` (검색/칩/카드/그리드) 디자인 패리티
- [x] `/st/vendors` 리스트 페이지 생성
- [x] `/st/vendors/[id]` 상세 페이지 생성

## Phase 3 — Trading Guide ✅ 완료
- [x] `/st/trading-guide` 가이드 본문 작성
- [x] 정보 입력 폼(플레이스홀더) 추가
- [x] 회사 선택 팝업(목록: vendors mock) → 문의 작성 목업

## Phase 4 — Support & About ✅ 완료
- [x] `/st/support` 문의 폼 생성
- [x] `/st/about` 소개 섹션 생성

## Phase 5 — Design & Copy ✅ 완료
- [x] `/st/_ui/panel.module.css` 공통 UI 스타일 적용
- [x] 전 페이지 동일 톤 유지(다크 배경, 패널, 칩/버튼/카드 재사용)
- [x] "Browse Products" → Product Catalog, "Browse Companies" → Company Info 통일 적용

## Phase 6 — 로고 버튼 추가 ✅ 완료
- [x] 모든 `/st` 페이지에 홈으로 돌아가기 로고 버튼 추가
- [x] 고정 위치 (top: 24px, left: 24px) 스타일링
- [x] 호버 효과 및 다크 테마 적용

## Done Criteria ✅ 완료
- [x] 네비 + 모든 버튼 정상 이동
- [x] Product Catalog 7개 목데이터 렌더링 (≥6 요구사항 충족)
- [x] Company Info 상세에서 제품 카드 표시
- [x] Trading Guide 3단계 흐름 동작
- [x] Support/About 페이지 존재
- [x] Contact 버튼 없음
- [x] 레거시 코드 보존

---

## 🆕 새로운 Phase (추가 개발 필요)

## Phase 7 — Catalog 개선
- [ ] `/st/products` 카드 간격/여백 CSS 조정(그리드 spacing, padding)
- [ ] Hero/섹션 카피라이팅 업데이트
- [ ] 카드 클릭 → `/st/products/[id]` 상세 이동 구현

## Phase 8 — Company Info 고도화
- [ ] `/st/vendors` 텍스트 카피라이팅 개선
- [ ] View Company → `/st/vendors/[id]` 연결
- [ ] Inquiry 버튼 → 회사 문의 팝업(폼 제출 → console.log)

## Phase 9 — Trading Guide 플로우
- [ ] 회사 선택 팝업 구현(mock vendors)
- [ ] 문의 폼 작성(이름/이메일/회사/내용/요구 MOQ 등)
- [ ] DB mock 저장(`/lib/st/data/inquiries.ts`)
- [ ] 완료 안내 문구 노출

## Phase 10 — Support 기능
- [ ] 문의 폼 구현(이름/이메일/회사/문의내용)
- [ ] 제출 시 안내 팝업
- [ ] DB mock 저장

## Phase 11 — About Us 확장
- [ ] `/st/about` 페이지 생성
- [ ] 미션/가치/연락처/파트너 로고 섹션 작성

## Phase 12 — Admin 대시보드
- [ ] `/st/admin` 페이지 생성
- [ ] 탭 Nav (Products / Vendors / Inquiries)
- [ ] Products 리스트/수정/삭제 목업
- [ ] Vendors 리스트/Inquiry 연결 상태 표시
- [ ] Inquiries 리스트/상태 토글/삭제 목업