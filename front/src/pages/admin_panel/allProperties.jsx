import React, { use, useEffect, useState } from 'react'
import Table from '../../components/Table';
import AdLayout from '../../components/admin-panel/Layout';
import axios from 'axios';
import axiosConfig from '../../utils/axiosConfig';

const AllProperties = () => {
  
 // axios for fetching data properties from the backend
  const [properties, setProperties] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosInstance = axiosConfig();
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/api/properties');
        
        setLoading(false);
        console.log(response.data);
        const propertiesList= response.data.map((item, index) => {
          return {
            number: index + 1,
            title: item.title,
            province: item.address.province,
            city: item.address.city,
          };
        
        });
        setProperties(propertiesList);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []); 

 

  const columns = [
    { key: 'number', label: '#' },
    { key: 'title', label: 'Title' },
    { key: 'province', label: 'Province' },
    { key: 'city', label: 'City' },
  ];

  return (
    <AdLayout>
    <div className="p-4 bg-white">
      {
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <Table columns={columns} data={properties} />
        )
      }
    </div>
    </AdLayout>
  );
}

export default AllProperties