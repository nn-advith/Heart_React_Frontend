import React, {useState} from 'react';
import axios from 'axios'
import { SectionWrapper, Title, HoriZon, Submit, Subhead } from '../Reusable/Reusable';
import Select from '../Select/Select';
import NumInput from '../NumInput/NumInput';
import { ParameterGrid, Result, ResultT, ResultC } from './PredictEle';
import {labels} from './Labels';
import {PulseLoader} from 'react-spinners'


const Predict = () => {


  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState('')
  const yesno_dict = { "Yes" : [0,1], "No": [1,0]}
  const sex_dict = {"Male": [0,1], "Female": [1,0]}
  

  const classifiers = ['Logistic Regression', 'Random Forest Classifier']

  const ynlist = ["Yes", "No"]
  const mflist = ["Male", "Female"]
  const agelist = ["18-24", "25-29", "30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80 or older"]
  const racelist = ["American Indian/ Alaskan Native", "Asian", "Black", "Hispanic", "Other", "White"]
  const dblist = ["Yes", "Yes (during pregnancy)", "No", "No (Borderline Diabetic)"]
  const ghlist = ["Excellent", "Fair", "Good", "Poor", "Very Good"]


  const [classifier, setClassifier] = useState('Logistic Regression')

  const [bmi, setBmi] = useState(0)
  const [smoke, setSmoke] = useState("Yes")
  const [drink, setDrink] = useState("Yes")
  const [stroke, setStroke] = useState("Yes")
  const [ph, setPh] = useState(0)
  const [mh, setMh] = useState(0)
  const [dw, setDw] = useState("Yes")
  const [gender, setGender] = useState("Male")
  const [ac, setAc] = useState("18-24")
  const [race, setRace] = useState("American Indian/ Alaskan Native")
  const [db, setDb] = useState("Yes")
  const [pa, setPa] = useState("Yes")
  const [gh, setGh] = useState("Excellent")
  const [st, setSt] = useState(0)
  const [ast, setAst] = useState("Yes")
  const [kd, setKd] = useState("Yes")
  const [sc, setSc] = useState("Yes")



  const handleClick = async() => {
    setLoading(true);
    var ip =[]
    var ageL = new Array(13).fill(0);
    var raceL = new Array(6).fill(0);
    var dbL = new Array(4).fill(0);
    var ghL = new Array(5).fill(0);

    ip = ip.concat(yesno_dict[smoke])
    ip = ip.concat(yesno_dict[drink])
    ip = ip.concat(yesno_dict[stroke])
    ip = ip.concat(yesno_dict[dw])
    ip = ip.concat(sex_dict[gender])
    ageL[agelist.indexOf(ac)] =1
    ip = ip.concat(ageL)
    raceL[racelist.indexOf(race)] = 1
    ip = ip.concat(raceL)
    dbL[dblist.indexOf(db)] = 1
    ip = ip.concat(dbL)
    ip = ip.concat(yesno_dict[pa])
    ghL[ghlist.concat(gh)] = 1
    ip = ip.concat(ghL)
    ip = ip.concat(yesno_dict[ast])
    ip = ip.concat(yesno_dict[kd])
    ip = ip.concat(yesno_dict[sc])
    ip = ip.concat([parseInt(bmi)])
    ip = ip.concat([parseInt(ph)])
    ip = ip.concat([parseInt(mh)])
    ip = ip.concat([parseInt(st)])
    ip = ip.concat([parseInt(classifier === 'Logistic Regression' ?1 : 0)])
    
    await axios.post('/predict_data',ip ).then(res => {res.data.res === '0' ? setResult('No'): setResult('Yes');
       setLoading(false)})
  }



  return (
    <>
      <SectionWrapper>
      <Title >PREDICT</Title>
      <HoriZon />
      <Subhead>Select Classifier:</Subhead>
      <Select ip={classifiers} state={classifier} setState={setClassifier}  data={""}></Select>
      <HoriZon />
      <Subhead>Input Parameters: </Subhead>
      <ParameterGrid>
      <NumInput  setState={setBmi} data={labels[0]} placeholder='Enter BMI' />
      <Select ip={ynlist} state={smoke} setState={setSmoke}  data={labels[1]}></Select>
      <Select ip={ynlist} state={drink} setState={setDrink}  data={labels[2]}></Select>
      <Select ip={ynlist} state={stroke} setState={setStroke}  data={labels[3]}></Select>
      <NumInput  setState={setPh} data={labels[4]} placeholder='Enter Days' />
      <NumInput  setState={setMh} data={labels[5]} placeholder='Enter Days' />
      <Select ip={ynlist} state={dw} setState={setDw}  data={labels[6]}></Select>
      <Select ip={mflist} state={gender} setState={setGender}  data={labels[7]}></Select>
      <Select ip={agelist} state={ac} setState={setAc}  data={labels[8]}></Select>
      <Select ip={racelist} state={race} setState={setRace}  data={labels[9]}></Select>
      <Select ip={dblist} state={db} setState={setDb}  data={labels[10]}></Select>
      <Select ip={ynlist} state={pa} setState={setPa}  data={labels[11]}></Select>
      <Select ip={ghlist} state={gh} setState={setGh}  data={labels[12]}></Select>
      <NumInput  setState={setSt} data={labels[13]} placeholder='Enter Hours' />
      <Select ip={ynlist} state={ast} setState={setAst}  data={labels[14]}></Select>
      <Select ip={ynlist} state={kd} setState={setKd}  data={labels[15]}></Select>
      <Select ip={ynlist} state={sc} setState={setSc}  data={labels[16]}></Select>
      </ParameterGrid>
   
      

      <Submit onClick={handleClick}>SUBMIT</Submit>
      <HoriZon />
      <Result>
      <ResultT>RESULTS :</ResultT>
      <ResultC result={result}>

      {loading ? <PulseLoader color={"#ff3737"} speedMultiplier={0.6}/>: 
      <div>
      <p>Possible risk of heart disease?</p>
      <div className='res' >{result}</div></div>}
      </ResultC>
      </Result>
    
      </SectionWrapper>
    </>
  )
}

export default Predict