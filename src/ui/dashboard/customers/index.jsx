import Customer from "./customer.jsx"

// TODO: Criar uma página para salvar clientes no DB
const customersList = [
  {
    id: 1,
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    name: "Hest",
    email: "hest@gmail.com",
    info: {
      pending: 800,
      paid: 100,
      invoicesCount: 3
    }
  },
  {
    id: 2,
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    name: "Bagriel",
    email: "bagre@gmail.com",
    info: {
      pending: 100,
      paid: 500,
      invoicesCount: 1
    }
  },
  {
    id: 3,
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    name: "Dreemurr",
    email: "dreemurr@gmail.com",
    info: {
      pending: 20,
      paid: 80,
      invoicesCount: 1
    }
  }
]

export default function Customers({ styles }) {
  return (
    <main className={styles.customers}>
      {customersList.map(customer => (
        <Customer customer={customer} styles={styles} key={customer.id} />
      ))}
    </main>
  )
}