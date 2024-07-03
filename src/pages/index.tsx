import { PageWrapper } from '@/components/layouts/page-wrapper';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {client} from "@/api/client"
import { useEffect } from 'react';
export default function Page() {
  const { t, i18n } = useTranslation();
  
  useEffect(()=>{
    async function init(){
      client.getUser.query({name:"demo"}).then(res=>{
        console.log({res})
      })
    }
    init()
  },[])

  function handleSwitchLang() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('tc');
      return;
    }
    i18n.changeLanguage('en');
  }

  return (
    <PageWrapper>
      <Button
        disableElevation
        variant='contained'
        onClick={handleSwitchLang}>
        {t('switch-lang')}
      </Button>
    </PageWrapper>
  );
}
