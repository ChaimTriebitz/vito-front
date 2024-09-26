import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ActionsBar, Table } from '../cmps';
import { TABLE_HEADERS } from '../data';
import { useGlobalState } from '../hooks';

const rows = [
   {
      "bank": "Investors Bank",
      "contact": "Richard H. Freund",
      "position": "Senior Vice President/Team Leader",
      "email": "rfreund@investorsbank.com",
      "cell": null,
      "office": 6463588392,
      "lender": "Commercial Real Estate",
      "loan": null,
      "territories": null,
      "category": "category1",
      "website": "www.investorsbank.com"
   },
   {
      "bank": "Investors Bank",
      "contact": "Nicholas Arsenis",
      "position": "Vice President",
      "email": "narsenis@myinvestorsbank.com",
      "cell": null,
      "office": 6463588389,
      "lender": "Commercial Real Estate",
      "loan": null,
      "territories": null,
      "category": "category2",
      "website": "www.myinvestorsbank.com"
   },
   {
      "bank": "Investors Bank",
      "contact": "Joseph Gargiulo",
      "position": "Vice President, Director of Special Assets",
      "email": "jgargiulo@myinvestorsbank.com",
      "cell": null,
      "office": 7326539381,
      "lender": null,
      "loan": null,
      "territories": null,
      "category": "category2",
      "website": null
   },
   {
      "bank": "Investors Bank",
      "contact": "Michael D. Whalen",
      "position": "Vice President",
      "email": "mwhalen@investorsbank.com",
      "cell": 6092238368,
      "office": null,
      "lender": null,
      "loan": null,
      "territories": "2300 State Route 33, Robbinsville, NJ 08691",
      "category": "category1",
      "website": null
   },
   {
      "bank": "Investors Bank",
      "contact": "Marc Katz",
      "position": "Senior Vice President",
      "email": "mkatz@investorsbank.com",
      "cell": 6463004545,
      "office": 6463588382,
      "lender": null,
      "loan": null,
      "territories": null,
      "category": "category1",
      "website": null
   }
]

export const Banks = () => {
   const [banks, setBanks] = useState([]);
   const { filters } = useGlobalState()

   const filteredRows = rows.filter(row => (row.category === filters.category || !filters.category))

   useEffect(() => {
      const getBanks = async () => {
         try {
            const res = await axios.get(`http://localhost:5000/api/banks`, {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${localStorage.getItem('vito')}`
               }
            })

            setBanks(res.data);
         } catch (err) {
            console.error(err);
         }
      };

      getBanks();
   }, []);

   const insert = async () => {
      try {
         const { data } = await axios.post(`http://localhost:5000/api/banks/createMany`, { data: rows }, {
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.getItem('vito')}`
            }
         })
         if (data.success) {
            console.log(data);

         }
      } catch (error) {
         console.log(error.response.data.error)
      }
   }

   return (
      <>
         <ActionsBar />
         {/* <button className='btn' style={{ position: 'absolute',background:'black',zIndex:9099 }} onClick={insert}>insert banks</button> */}
         <Table headers={TABLE_HEADERS} rows={filteredRows} />
      </>
   );
};

