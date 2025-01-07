import styles from "@/layout/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و اجاره ملک</h3>
        <p>
          در صورتی که نیاز به مشاوره با ما را دارید، لطفاً از طریق ایمیل یا
          شماره موبایل زیر در تماس باشید{" "}
        </p>
        <p className={styles.num}>09127185873</p>
        <p className={styles.num}>mohadese.alijani@gmail.com</p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
