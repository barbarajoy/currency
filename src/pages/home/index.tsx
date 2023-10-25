import styles from './home.module.css'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

export function Home(){
  return(
    <main className={styles.container}>
      <form className={styles.form}>
        <input
          placeholder="Type the currency symbol: BTC..."
        />
        <button type="submit">
          <BiSearch size={30} color="FFF"/>
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope='col'>Currency</th>
            <th scope='col'>Market value</th>
            <th scope='col'>Price</th>
            <th scope='col'>Volume</th>
          </tr>
        </thead>

        <tbody id='tbody'>
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-Label="Currency">
              <Link className={styles.link} to='/detail/btc'>
                <span>Bitcoin</span> | BTC
              </Link>
            </td>
            <td className={styles.tdLabel} data-Label="Market">
              R$299999
            </td>
            <td className={styles.tdLabel} data-Label="Price">
              R$40.8642
            </td>
            <td className={styles.tdLoss} data-Label="Volume">
              <span>-5.3</span>
            </td>

          </tr>
        </tbody>
      </table>



    </main>
  )
}
