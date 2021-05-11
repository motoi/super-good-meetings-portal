import Head from "next/head";
import Link from "next/link";
import styles from "./styles/policy.scss";

import Layout from "../components/layout";

export default function Plan() {
  return (
    <>
      <Head>
        <title>特定商取引法に基づく表示 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.policy}>
          <nav>
            <ul>
              <li>
                <Link href="/privacy">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/terms">利用規約</Link>
              </li>
              <li className={styles.active}>
                <Link href="/law">特定商取引法に基づく表示</Link>
              </li>
              <li>
                <Link href="/security">セキュリティホワイトペーパー</Link>
              </li>
            </ul>
          </nav>

          <h1>特定商取引法に基づく表示</h1>
          <dl>
            <dt>1. 事業者の名称</dt>
            <dd>株式会社コパイロツト</dd>
            <dt>2. 代表者または通信販売に関する業務の責任者の氏名</dt>
            <dd>代表取締役社長 定金 基</dd>
            <dt>3. 住所</dt>
            <dd>〒107-0062 東京都港区南青山2-22-2 南青山篠崎ビル2F</dd>
            <dt>4. メールアドレス</dt>
            <dd>supergoodmeetings@copilot.jp </dd>
            <dt>5. 商品の販売価格・サービスの対価</dt>
            <dd>各商品・サービスのご購入ページにて表示する価格</dd>
            <dt>6. 対価以外に必要となる費用</dt>
            <dd>
              無し
              <br />
              ※なお、インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります（金額は、お客様が契約した各事業者が定める通り）。
            </dd>
            <dt>7. 支払方法</dt>
            <dd>クレジット決済</dd>
            <dt>8. 代金の支払時期</dt>
            <dd>
              ご利用のクレジットカードの締め日や契約内容により異なります。ご利用されるカード会社までお問い合わせください。
            </dd>
            <dt>9. 商品引渡しまたはサービス提供の時期</dt>
            <dd>本サービスの会員登録後ただちにサービスのご利用が可能です。</dd>
            <dt>10. 返品・キャンセルに関する特約</dt>
            <dd>
              登録ユーザーが退会した月の月額料金は、退会通知を受領した日を基準として、日割り計算により取り扱われるものとします。
              <br />
              当社が登録ユーザーに対し返金を要する場合、返金日及び方法は別途当社が登録ユーザーに別途通知する内容に従うものとします。
              <br />
              登録ユーザーが退会する場合を除き、購入手続完了後の返品またはキャンセルをお受けいたしません。なお、サービスに契約不適合性がある場合は、利用規約の定めに従って対応します。
              <br />
              特別な販売条件または提供条件があるサービスについては、各サービスの購入ページにおいて条件を表示します。
            </dd>
          </dl>
        </div>
      </Layout>
    </>
  );
}
