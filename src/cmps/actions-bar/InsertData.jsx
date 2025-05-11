import React, { useState } from "react"
import * as XLSX from "xlsx"
import { strings } from '../../functions'
import { create } from '../../controllers/create'
import { useGlobalState } from '../../hooks'

const json = [
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Lender",
      "__EMPTY": "Type",
      "__EMPTY_1": "Deal Size",
      "__EMPTY_2": "Contact",
      "__EMPTY_3": "Posistion",
      "__EMPTY_4": "Office",
      "__EMPTY_5": "Cell",
      "__EMPTY_6": "Email",
      "__EMPTY_7": "Notes"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Provident / Lakeland",
      "__EMPTY": "Bank",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Rob Surovich",
      "__EMPTY_3": "Team Leader ",
      "__EMPTY_4": "(201) 425-9197 ",
      "__EMPTY_5": "914-262-3982",
      "__EMPTY_6": "robert.surovich@provident.bank",
      "__EMPTY_7": "Yanky's Contact",
      "__EMPTY_10": "Meeting :"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "FNBLI",
      "__EMPTY": "Bank",
      "__EMPTY_1": 50000000,
      "__EMPTY_2": "Kathryn A. Campanaro",
      "__EMPTY_3": "Assistant Vice President ",
      "__EMPTY_4": "516-671-4900 ext. 7354",
      "__EMPTY_7": "Yanky's Contact",
      "__EMPTY_10": "Jonathan from Costumers with the head of the group "
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Metropolitan Bank",
      "__EMPTY": "Bank",
      "__EMPTY_1": 50000000,
      "__EMPTY_2": "Vivek Baily"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Ridgewood Bank",
      "__EMPTY": "Bank",
      "__EMPTY_1": 50000000,
      "__EMPTY_2": "Jordan Cohen",
      "__EMPTY_3": "Originator",
      "__EMPTY_4": "718-240-4895",
      "__EMPTY_5": "917-635-2352",
      "__EMPTY_6": "jcohen@ridgewoodbank.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Customers Bank",
      "__EMPTY": "Bank",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Jonathan H. Lieblich",
      "__EMPTY_3": "Originator",
      "__EMPTY_4": "631-792-2685",
      "__EMPTY_6": "jlieblich@customersbank.com",
      "__EMPTY_7": "mid to high 200 over T. New contact for Yanky"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "LMF",
      "__EMPTY": "CMBS",
      "__EMPTY_1": 75000000,
      "__EMPTY_2": "Nihad Choudhury",
      "__EMPTY_5": "201-667-9467",
      "__EMPTY_6": "nihad.choudhury@lmfcommercial.com",
      "__EMPTY_7": "Closed with him 1815 Putnam "
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Argentic",
      "__EMPTY": "CMBS",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Judah Samter",
      "__EMPTY_3": "Team Leader ",
      "__EMPTY_4": "516-510-7899",
      "__EMPTY_5": "646-560-1748",
      "__EMPTY_6": "JSamter@argenticmgmt.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Citi ",
      "__EMPTY": "CMBS",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Eric Mirvis",
      "__EMPTY_3": "Team Leader",
      "__EMPTY_5": "917-207-4901",
      "__EMPTY_6": "eric.mirvis@citi.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Citi ",
      "__EMPTY": "CMBS",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Ben Brovender",
      "__EMPTY_3": "Originator",
      "__EMPTY_5": "(212) 816-2838",
      "__EMPTY_6": "ben.brovender@citi.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Greystone",
      "__EMPTY": "CMBS, Freddie Fannie, Fund",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Shimon Rosenfeld",
      "__EMPTY_3": "Originator",
      "__EMPTY_4": "540-359-7603",
      "__EMPTY_5": "646-610-9589",
      "__EMPTY_6": "shimon.rosenfeld@greyco.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Benefit Street",
      "__EMPTY": "CMBS, Fund",
      "__EMPTY_1": 500000000,
      "__EMPTY_2": "Peter Touhill",
      "__EMPTY_6": "p.touhill@benefitstreetpartners.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "3650 REIT",
      "__EMPTY": "CMBS, Fund",
      "__EMPTY_1": 150000000,
      "__EMPTY_2": "Matthew Dalton​​​​",
      "__EMPTY_3": "Loan Officer",
      "__EMPTY_5": "917-575-8599",
      "__EMPTY_6": "mdalton@3650reit.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Goldman Sachs",
      "__EMPTY": "CMBS, Fund"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Rialto",
      "__EMPTY": "CMBS, Fund",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Michael Peskin",
      "__EMPTY_3": "Originator",
      "__EMPTY_4": "212-751-4695",
      "__EMPTY_5": "516-650-8595",
      "__EMPTY_6": "michael.peskin@rialtocapital.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Berkadia",
      "__EMPTY": "CMBS, SBL",
      "__EMPTY_1": 50000000,
      "__EMPTY_2": "Matthew Nelson",
      "__EMPTY_3": "MANAGING DIRECTOR",
      "__EMPTY_4": "646-432-7442",
      "__EMPTY_5": "518-410-6964",
      "__EMPTY_6": "matthew.nelson@berkadia.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "JLL",
      "__EMPTY": "Freddie Fannie",
      "__EMPTY_1": 200000000,
      "__EMPTY_2": "John​​​​ Flynn",
      "__EMPTY_3": "Loan Officer",
      "__EMPTY_6": "John.Flynn@jll.com",
      "__EMPTY_7": "Closed with him Frimmy Goldberger loans when he was at Berkedia. He's also a broker "
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "JLL",
      "__EMPTY": "Freddie Fannie",
      "__EMPTY_1": 200000000,
      "__EMPTY_2": "Michael Shmuely",
      "__EMPTY_3": "Team Leader",
      "__EMPTY_6": "Michael.Shmuely@jll.com"
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Walker Dunlop",
      "__EMPTY": "Freddie Fannie, SBL",
      "__EMPTY_1": 10000000,
      "__EMPTY_2": "Ronnie Cavalieri ",
      "__EMPTY_3": "Director",
      "__EMPTY_4": "781-247-0494",
      "__EMPTY_5": " 508 951-7191",
      "__EMPTY_6": "rcavalieri@walkerdunlop.com",
      "__EMPTY_7": "Reffered by Steve Manela "
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "MidCap",
      "__EMPTY": "Fund",
      "__EMPTY_1": 100000000,
      "__EMPTY_7": "Do hotels "
   },
   {
      "Need to have a place for notes when i speak to him. bank guidlines change all the time. also have reminders to check in with him again ": "Sheridan Fund",
      "__EMPTY": "Fund",
      "__EMPTY_1": 100000000,
      "__EMPTY_2": "Asher Bittman",
      "__EMPTY_3": "Originator",
      "__EMPTY_4": "718-614-4820",
      "__EMPTY_6": "abittman@sheridanfunds.com",
      "__EMPTY_7": "met at ecore 2024"
   },
   {
      "__EMPTY_1": 100000000
   }
]

export const InsertData = () => {
   const { page } = useGlobalState()
   const [data, setData] = useState([])



   const handleFileUpload = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
         const binaryStr = event.target.result
         const workbook = XLSX.read(binaryStr, { type: "binary" })
         const sheetName = workbook.SheetNames[0]
         const worksheet = workbook.Sheets[sheetName]
         const jsonData = XLSX.utils.sheet_to_json(worksheet)
         setData(jsonData)
      }

      if (file) {
         reader.readAsBinaryString(file)
      }
   }

   const handleClick = () => {
      const t1 = data.map(obj => 
         Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [strings.toSnakeCase(key), value])
         )
      );

      const  t2 = t1.map(t=>({...t,type:t.type?.split(',')?.map(str => str?.trim())}))

      create.manyData(t2,page).catch(err => console.log(err))

      console.log(t2.map(t=>t.type));
      
   }

   return (
      <div>
         <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
         />
         <button className='btn by' onClick={handleClick}>Insert</button>
      </div>
   )
}

