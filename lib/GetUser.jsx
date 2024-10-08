'use client';
import { serverUrl } from '@/config';
import { setUser } from '@/redux/UserSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import Loader from '@/app/components/Loader';
import Cookies from 'js-cookie';

const Getuser = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const path = usePathname()
  const excludedPaths = ["/", "/registration", "/login"];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("auth")
        const response = await axios.get(`${serverUrl}/api/v1/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (response.data.success) {
          dispatch(setUser(response.data.data));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!excludedPaths.includes(path)) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [dispatch, path]);

  return (
    <>
      {loading ? (

        !excludedPaths.includes(path) && (
          <Loader/>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Getuser;
