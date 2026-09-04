export default function OfflinePage() {
  return (
    <main
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        textAlign: "center",
        padding: 24,
      }}
    >
      <h1>오프라인 상태예요</h1>
      <p>인터넷 연결을 확인한 뒤 다시 시도해주세요.</p>
    </main>
  );
}
