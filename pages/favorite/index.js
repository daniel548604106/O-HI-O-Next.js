import React from 'react'
import { useRouter} from 'next/router'
const index = () => {
  const router = useRouter()
  const favoriteProducts = useSelector((state) => state.global.favoriteProducts);
  const favoriteShops = useSelector((state) => state.global.favoriteShops);
  const [showProducts, setShowProducts] = useState(true);
  const tabs = [
    {
      name: '商品',
      location: 'products',
    },
    {
      name: '專注的設計館',
      location: 'shops',
    },
  ];
  return (
    <div>
      favorite
    </div>
  )
}

export default index
