import React from 'react' // useEffect // useState

// NEXT
import { useRouter } from 'next/router'
import Link from 'next/link'

// ANTD
import { Divider, Button } from 'antd'
import { HomeFilled } from '@ant-design/icons';


// ROUTING
// import { useRouter } from 'next/router'
// import Link from 'next/link'


import styled from 'styled-components'


export function DashboardMenuItem({ labelName, labelCount }) {
    return (
        <div className='menu-label'>
            <div>{labelName}</div>
            <span>{labelCount}</span>
        </ div >
    )
}

const DashboardStyles = styled.div` 
     width: 100%;
    .menu {
       width: 100%;    
       background: white;
       display: flex;
       align-items: center;
    }
    .menu-item {
      font-size: 20px;
      background: cyan;
    }
    .menu-label {
        display: flex;
    }
    .ant-menu-submenu-title {
        display: flex;
        align-items: center;
    }
    /*** MENU BUTTON ***/
    .menu-button:first-child {
        margin-left: 0;
    }
    .menu-button {
        margin-right: 10px;
    }
    .menu-button.ant-btn-primary {
        background: rgba(0, 0, 0, 0.06);
        color: black;
    }
    .menu-label div, .menu-label span {
        font-weight: 600;
        height: 20px;
        display: flex;
        align-items: center;
    }
    .menu-label div {
        margin-right: 10px;    
    }
    .menu-label span {
        background: lightgray;
        border-radius: 10px;
        padding: 10px 12px;
    }
  `

export default function ProfileDashboard(
    { profileAddress = '' } : { profileAddress: string }) {
  // onFilterChange,
  // onSortChange,


    const router = useRouter()
    const { tab } = router.query


  // const [route, setRoute] = useState()
  // const [filter, setFilter] = useState('all')
  // const [sort, setSort] = useState('new')

  // const router = useRouter()

  // useEffect(() => {
  //   setRoute(window.location.pathname)
  // }, [setRoute])

  // const [filterVisible, setFilterVisible] = useState(false)

  // const changeFilter = evt => {
  //   onFilterChange(evt.target.value)
  // }

  // const changeSort = evt => {
  //   onSortChange(evt.target.value)
  // }

  // const handleClick = e => {
  //   e.preventDefault()
  //   router.push(href)
  // }

  return (
      <DashboardStyles>
      <Divider />
          <div style={{ marginLeft: 20 }}>
              <Link href={`/profile/${profileAddress}/`}>
                  <Button
                      className='menu-button'
                      type={tab === 'home' ? 'primary' : 'text'}
                      shape='round'>
                        <HomeFilled />
                  </Button>
              </Link>

              <Link
                  href={{
                      pathname: `/profile/${profileAddress}`,
                      query: { tab: 'created' },
                  }}
              >
                  <Button
                      className='menu-button'
                      type={tab === 'created' ? 'primary' : 'text'}
                      shape='round'>
                        <DashboardMenuItem labelName='Created' labelCount={33} />
                  </Button>
              </Link>

              <Link
                  href={{
                      pathname: `/profile/${profileAddress}`,
                      query: { tab: 'collections' },
                  }}
              >
                  <Button
                      className='menu-button'
                      type={tab === 'collections' ? 'primary' : 'text'}
                      shape='round'>
                      <DashboardMenuItem labelName='Collections' labelCount={20} />
                  </Button>
              </Link>

              <Link
                  href={{
                      pathname: `/profile/${profileAddress}`,
                      query: { tab: 'starred' },
                  }}
              >
                  <Button
                      className='menu-button'
                      type={tab === 'starred' ? 'primary' : 'text'}
                      shape='round'>
                        <DashboardMenuItem labelName='Starred' labelCount={20} />
                  </Button>
              </Link>
          </div>
       <Divider />
      </DashboardStyles>
  )
}