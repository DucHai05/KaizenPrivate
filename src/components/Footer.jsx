const footerLogoUrl = `${import.meta.env.BASE_URL}images/logo-kaizen.png`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img className="footer-logo" src={footerLogoUrl} alt="Kaizen Private Fitness" />
        <p className="footer-tagline">
          Phòng tập PT 1:1 cho trẻ 5-17 tuổi, chỉnh dáng, tăng sức mạnh và nuôi thói quen vận động.
        </p>
        <div className="footer-info">
          <p>Hotline: 0988 177 173</p>
          <p>Mở cửa: 06:00 - 21:00</p>
        </div>
        <div className="footer-locations">
          <h3>Hệ thống cơ sở</h3>
          <p>
            <strong>CS1:</strong> Số 2, ngõ 90 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội
          </p>
          <p>
            <strong>CS2:</strong> B2-28 biệt thự liền kề Vinhomes Gardenia Hàm Nghi,
            Nam Từ Liêm, Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}
