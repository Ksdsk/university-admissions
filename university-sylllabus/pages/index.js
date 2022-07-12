import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { 
  Typography, 
  FormControl, 
  InputLabel, 
  Select,
  MenuItem,
  Grid,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
} from '@mui/material';

const provinces = [
  {
    value: 'AB',
    label: 'Alberta',
  },
  {
    value: 'BC',
    label: 'British Columbia',
  },
  {
    value: 'MB',
    label: 'Manitoba',
  },
  {
    value: 'NB',
    label: 'New Brunswick',
  },
  {
    value: 'NL',
    label: 'Newfoundland and Labrador',
  },
  {
    value: 'NS',
    label: 'Nova Scotia',
  },
  {
    value: 'ON',
    label: 'Ontario',
  },
  {
    value: 'PEI',
    label: 'Prince Edward Island',
  },
  {
    value: 'QC',
    label: 'Quebec',
  },
  {
    value: 'SK',
    label: 'Saskatchewan',
  },
]

const universities = [

  // ALBERTA

  {
    name: 'Athabasca University',
    province: 'AB',
    primaryColor: '#f36f21',
    secondaryColor: '#ebb141'
  },
  {
    name: 'Concordia University of Edmonton',
    province: 'AB',
    primaryColor: '#005392',
    secondaryColor: '#005392'
  },
  {
    name: 'MacEwan University',
    province: 'AB',
    primaryColor: '#8c2332',
    secondaryColor: '#1c1819'
  },
  {
    name: 'Mount Royal University',
    province: 'AB',
    primaryColor: '#2a4658',
    secondaryColor: '#067ca8'
  },
  {
    name: "The King's University",
    province: 'AB',
    primaryColor: '#1abecf',
    secondaryColor: '#0093d6'
  },
  {
    name: 'University of Alberta',
    province: 'AB',
    primaryColor: '#007a33',
    secondaryColor: '#f2cd00'
  },
  {
    name: 'University of Calgary',
    province: 'AB',
    primaryColor: '#d6001c',
    secondaryColor: '#ffcd00'
  },
  {
    name: 'University of Lethbridge',
    province: 'AB',
    primaryColor: '#00549d',
    secondaryColor: '#1276ce'
  },


  // BRITISH COLUMBIA 


  {
    name: 'Capilano University',
    province: 'BC',
    primaryColor: '#5ba446',
    secondaryColor: '#fcaf17'
  },
  {
    name: 'Emily Carr University of Art and Design',
    province: 'BC',
    primaryColor: '#e01483',
    secondaryColor: '#c1d42d'
  },
  {
    name: 'Kwantlen Polytechnic University',
    province: 'BC',
    primaryColor: '#98002e',
    secondaryColor: '#d2285b'
  },
  {
    name: 'Royal Roads University',
    province: 'BC',
    primaryColor: '#434758',
    secondaryColor: '#29c5da'
  },
  {
    name: 'University of British Columbia',
    province: 'BC',
    primaryColor: '#002145',
    secondaryColor: '#00A7E1'
  },
  {
    name: 'Simon Fraser University',
    province: 'BC',
    primaryColor: '#cb002b',
    secondaryColor: '#cb002b'
  },
  {
    name: 'Thompson Rivers University',
    province: 'BC',
    primaryColor: '#023047',
    secondaryColor: '#2cb9ff'
  },
  {
    name: 'Trinity Western University',
    province: 'BC',
    primaryColor: '#004584',
    secondaryColor: '#486a8a'
  },
  {
    name: 'University of the Fraser Valley',
    province: 'BC',
    primaryColor: '#00703c',
    secondaryColor: '#99ca3c'
  },
  {
    name: 'University of Northern British Columbia',
    province: 'BC',
    primaryColor: '#00573d',
    secondaryColor: '#15be8b'
  },
  {
    name: 'University of Victoria',
    province: 'BC',
    primaryColor: '#005493',
    secondaryColor: '#f5aa1c'
  },
  {
    name: 'Vancouver Island University',
    province: 'BC',
    primaryColor: '#00244a',
    secondaryColor: '#0294d0'
  },

  // MANITOBA

  {
    name: 'Brandon University',
    province: 'MB',
    primaryColor: '#00315e',
    secondaryColor: '#e5c57c'
  },
  {
    name: "St. Paul's College",
    province: 'MB',
    primaryColor: '#6e222f',
    secondaryColor: '#cebbb7'
  },
  {
    name: 'The University of Winnipeg',
    province: 'MB',
    primaryColor: '#DA001B',
    secondaryColor: '#E71C31'
  },
  {
    name: 'Université de Saint-Boniface',
    province: 'MB',
    primaryColor: '#0b9ec1',
    secondaryColor: '#00456d'
  },
  {
    name: 'University of Manitoba',
    province: 'MB',
    primaryColor: '#4f2e1d',
    secondaryColor: '#4f2e1d'
  },
  {
    name: 'Canadian Mennonite University',
    province: 'MB',
    primaryColor: '#134834',
    secondaryColor: '#1f5c45'
  },

  // NEW BRUNSWICK

  {
    name: 'Mount Allison University',
    province: 'NB',
    primaryColor: '#98002e',
    secondaryColor: '#c6ac31'
  },
  {
    name: 'St. Thomas University',
    province: 'NB',
    primaryColor: '#035338',
    secondaryColor: '#e0a32e'
  },
  {
    name: 'Université de Moncton',
    province: 'NB',
    primaryColor: '#004b8f',
    secondaryColor: '#e9ae26'
  },
  {
    name: 'University of New Brunswick',
    province: 'NB',
    primaryColor: '#000000',
    secondaryColor: '#e94626'
  },

  // NEWFOUNDLAND AND LABRADOR

  {
    name: 'Memorial University of Newfoundland',
    province: 'NL',
    primaryColor: '#760433',
    secondaryColor: '#a7255b'
  },

  // NOVA SCOTIA

  {
    name: 'Acadia University',
    province: 'NS',
    primaryColor: '#023fc4',
    secondaryColor: '#e20051'
  },
  {
    name: 'Cape Breton University',
    province: 'NS',
    primaryColor: '#e55204',
    secondaryColor: '#f7a87e'
  },
  {
    name: 'Dalhousie University',
    province: 'NS',
    primaryColor: '#000000',
    secondaryColor: '#3a3a3a'
  },
  {
    name: 'Mount Saint Vincent University',
    province: 'NS',
    primaryColor: '#00539b',
    secondaryColor: '#dabe20'
  },
  {
    name: 'NSCAD University',
    province: 'NS',
    primaryColor: '#1c2674',
    secondaryColor: '#5c68c8'
  },
  {
    name: 'Saint Mary\'s University',
    province: 'NS',
    primaryColor: '#9d2237',
    secondaryColor: '#602344'
  },
  {
    name: 'St. Francis Xavier University',
    province: 'NS',
    primaryColor: '#2f6291',
    secondaryColor: '#071640'
  },
  {
    name: 'Université de Sainte-Anne',
    province: 'NS',
    primaryColor: '#252f6c',
    secondaryColor: '#ab8978'
  },
  {
    name: 'University of King\'s College',
    province: 'NS',
    primaryColor: '#063872',
    secondaryColor: '#242b37'
  },

  // ONTARIO

  {
    name: 'Algoma University',
    province: 'ON',
    primaryColor: '#be321b',
    secondaryColor: '#bebebe'
  },
  {
    name: 'Brescia University',
    province: 'ON',
    primaryColor: '#154396',
    secondaryColor: '#faa21b'
  },
  {
    name: 'Brock University',
    province: 'ON',
    primaryColor: '#ed1b24',
    secondaryColor: '#ff464e'
  },
  {
    name: 'Carleton University',
    province: 'ON',
    primaryColor: '#000000',
    secondaryColor: '#ed1b24'
  },
  {
    name: 'Huron University',
    province: 'ON',
    primaryColor: '#e00039',
    secondaryColor: '#ff4e7b'
  },
  {
    name: 'King\'s University College',
    province: 'ON',
    primaryColor: '#00483a',
    secondaryColor: '#143831'
  },
  {
    name: 'Lakehead University',
    province: 'ON',
    primaryColor: '#cd1e19',
    secondaryColor: '#3469a2'
  },
  {
    name: 'Laurentian University',
    province: 'ON',
    primaryColor: '#003e7e',
    secondaryColor: '#ffc425'
  },
  {
    name: 'McMaster University',
    province: 'ON',
    primaryColor: '#6d013b',
    secondaryColor: '#fccd5b'
  },
  {
    name: 'Nipissing University',
    province: 'ON',
    primaryColor: '#004b85',
    secondaryColor: '#007f61'
  },
  {
    name: 'OCAD University',
    province: 'ON',
    primaryColor: '#000000',
    secondaryColor: '#222222'
  },
  {
    name: 'Ontario Techonology University',
    province: 'ON',
    primaryColor: '#033068',
    secondaryColor: '#ee5a3d'
  },
  {
    name: 'Queen\'s University',
    province: 'ON',
    primaryColor: '#b81237',
    secondaryColor: '#bd9434'
  },
  {
    name: 'Redeemer University',
    province: 'ON',
    primaryColor: '#ed1b2f',
    secondaryColor: '#000000'
  },
  {
    name: 'Royal Military College of Canada',
    province: 'ON',
    primaryColor: '#ed1b2f',
    secondaryColor: '#ff8490'
  },
  {
    name: 'Saint Jerome\'s University',
    province: 'ON',
    primaryColor: '#00573d',
    secondaryColor: '#c88b11'
  },
  {
    name: 'Toronto Metropolitan University',
    province: 'ON',
    primaryColor: '#0c4e9a',
    secondaryColor: '#fbdd03'
  },
  {
    name: 'Trent University',
    province: 'ON',
    primaryColor: '#115e67',
    secondaryColor: '#2f4039'
  },
  {
    name: 'University of Guelph',
    province: 'ON',
    primaryColor: '#c20430',
    secondaryColor: '#ffc72a'
  },
  {
    name: 'University of Ottawa',
    province: 'ON',
    primaryColor: '#8f001a',
    secondaryColor: '#c02b46'
  },
  {
    name: 'University of St. Michael\'s College',
    province: 'ON',
    primaryColor: '#80bae5',
    secondaryColor: '#228f71'
  },
  {
    name: 'University of Sudbury',
    province: 'ON',
    primaryColor: '#d31145',
    secondaryColor: '#98002e'
  },
  {
    name: 'University of Toronto',
    province: 'ON',
    primaryColor: '#002f65',
    secondaryColor: '#1a5aa3'
  },
  {
    name: 'Trinity College',
    province: 'ON',
    primaryColor: '#142e7b',
    secondaryColor: '#cfb78f'
  },
  {
    name: 'University of Waterloo',
    province: 'ON',
    primaryColor: '#f9c34e',
    secondaryColor: '#d64346'
  },
  {
    name: 'University of Windsor',
    province: 'ON',
    primaryColor: '#005596',
    secondaryColor: '#ffcf01'
  },
  {
    name: 'Victoria University',
    province: 'ON',
    primaryColor: '#a0002e',
    secondaryColor: '#cf3d67'
  },
  {
    name: 'Western University',
    province: 'ON',
    primaryColor: '#4f2683',
    secondaryColor: '#8344d3'
  },
  {
    name: 'Wilfrid Laurier University',
    province: 'ON',
    primaryColor: '#422c89',
    secondaryColor: '#e31738'
  },

  // PEI

  {
    name: 'University of Prince Edward Island',
    province: 'PEI',
    primaryColor: '#8d1f04',
    secondaryColor: '#5b8726'
  },

  // QUEBEC

  {
    name: 'Bishop\'s University',
    province: 'QC',
    primaryColor: '#644092',
    secondaryColor: '#9956ed'
  },
  {
    name: 'Concordia University',
    province: 'QC',
    primaryColor: '#93002d',
    secondaryColor: '#b18c62'
  },
  {
    name: 'École de technologie supérieure',
    province: 'QC',
    primaryColor: '#e62a38',
    secondaryColor: '#fd4c5a'
  },
  {
    name: 'École nationale d\'administration publique',
    province: 'QC',
    primaryColor: '#8a2629',
    secondaryColor: '#421d1e'
  },
  {
    name: 'HEC Montréal',
    province: 'QC',
    primaryColor: '#00548f',
    secondaryColor: '#3f89bd'
  },
  {
    name: 'Institut national de la recherche scientifique',
    province: 'QC',
    primaryColor: '#001844',
    secondaryColor: '#1c448e'
  },
  {
    name: 'McGill University',
    province: 'QC',
    primaryColor: '#ed1b2f',
    secondaryColor: '#ff0018'
  },
  {
    name: ' Polytechnique Montréal',
    province: 'QC',
    primaryColor: '#42aae7',
    secondaryColor: '#6bc8ff'
  },
  {
    name: 'Université de Montréal',
    province: 'QC',
    primaryColor: '#066cb5',
    secondaryColor: '#2194e7'
  },
  {
    name: 'Université de Sherbrooke',
    province: 'QC',
    primaryColor: '#2bee18',
    secondaryColor: '#40dd31'
  },
  {
    name: 'Université du Québec',
    province: 'QC',
    primaryColor: '#fdb813',
    secondaryColor: '#ffce59'
  },
  {
    name: 'Université Laval',
    province: 'QC',
    primaryColor: '#ff3333',
    secondaryColor: '#ffcc00'
  },
  {
    name: 'Université TÉLUQ',
    province: 'QC',
    primaryColor: '#6cbe45',
    secondaryColor: '#2c720b'
  },

  // SASKATCHEWAN

  {
    name: 'Campion College',
    province: 'SK',
    primaryColor: '#760b11',
    secondaryColor: '#9d272d'
  },
  {
    name: 'First Nations University of Canada',
    province: 'SK',
    primaryColor: '#0098d4',
    secondaryColor: '#ffdc72'
  },
  {
    name: 'Luther College',
    province: 'SK',
    primaryColor: '#164690',
    secondaryColor: '#6991d8'
  },
  {
    name: 'St. Thomas More College',
    province: 'SK',
    primaryColor: '#096a47',
    secondaryColor: '#e73809'
  },
  {
    name: 'University of Regina',
    province: 'SK',
    primaryColor: '#304b47',
    secondaryColor: '#304b47'
  },
  {
    name: 'University of Saskatchewan',
    province: 'SK',
    primaryColor: '#006a40',
    secondaryColor: '#8d9f26'
  },
]

const filterUnis = []

export default function Home() {

  // colour select
  const [primaryColor, setPrimaryColor] = React.useState('#f50057');
  const [secondaryColor, setSecondaryColor] = React.useState('#aa00ff');


  // institution select
  const [institution, setInstitution] = React.useState('');
  const handleInstitutionChange = (event) => {
    setInstitution(event.target.value);
    setPrimaryColor(filterUnis[event.target.value].primaryColor);
    setSecondaryColor(filterUnis[event.target.value].secondaryColor);
  }

  // province select
  const [province, setProvince] = React.useState('');
  const handleProvinceChange = (event) => {
    filterUnis = [];
    setInstitution(0);
    setProvince(event.target.value);
    universities.forEach(university => {
      if (university.province == provinces[event.target.value].value) {
        filterUnis.push(university)
      }
    })

    setPrimaryColor(filterUnis[0].primaryColor);
    setSecondaryColor(filterUnis[0].secondaryColor);

  }

  // term select
  const [term, setTerm] = React.useState('1');
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  // typography theme
  const theme = createTheme();
  theme.typography.h1 = {
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '3.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
  };









  return (
    <div className={styles.container}>


      <Head>
        <title>University Syllabus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ThemeProvider
          theme={theme}
        >
          <Typography
            variant = "h1"
            component = "h1"
            fontWeight={700}
            sx = {{
              background: 'linear-gradient(to right, '+ primaryColor + ', ' + secondaryColor +')',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            xs = {{
              fontSize: '0.5rem',
            }}
          >
            University Syllabus
          </Typography>
        </ThemeProvider>
        

        <Typography
            
            variant = "overline"
            component = "p"
            sx={{
              marginTop: 1,
              marginBottom:3,
              background: 'linear-gradient(to right, '+ primaryColor + ', ' + secondaryColor +')',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your university syllabus database for all Canadian universities
          </Typography>

        <form>
          <Grid 
            container 
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 3, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={2}>
              <FormControl fullWidth>
                <InputLabel>Province</InputLabel>
                <Select
                  labelId="province-label"
                  id="province-select"
                  value={province}
                  label="Province"
                  onChange={handleProvinceChange}
                >
                  {provinces.map((province, i)=> (
                    <MenuItem key={i} value={i}>{province.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>University</InputLabel>
                <Select
                  labelId="university-label"
                  id="unitity-select"
                  value={institution}
                  label="University"
                  onChange={handleInstitutionChange}
                >
                  {filterUnis.map((university, i)=> (
                    <MenuItem key={i} value={i}>{university.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel>Term</InputLabel>
                <Select
                  labelId="term-label"
                  id="term-select"
                  value={term}
                  label="Term"
                  onChange={handleTermChange}
                >
                  <MenuItem value={1}>Summer 2022</MenuItem>
                  <MenuItem value={2}>Fall 2022</MenuItem>
                  <MenuItem value={3}>Winter 2023</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <TextField fullWidth id="course" label="Course" variant="outlined" />
            </Grid>
            
            <Grid item xs={3}>
              <Button variant={"contained"} 
                fullWidth
                sx = {{
                  background: 'linear-gradient(to right, '+ primaryColor + ', ' + secondaryColor +')',
                  boxShadow: 'none',
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid> 
        </form>


        <Typography
          variant = "overline"
          component = "a"
          sx={{
            marginTop: 10,
            textDecoration: 'underline',
            textUnderlineOffset: '5px'
          }}
          >

          <a href="">Or Upload a syllabus for your university</a>
        </Typography>



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
