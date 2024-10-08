import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MsetUpAds from './MsetUpAds';
import MTargetting from './MTargetting';
import Payment from './Payment';
const CreateAdAcordian = ({formData, setFormData,communities}) => {
  return (
    <div className="flex flex-col gap-y-8 pt-5 ">
      <Accordion defaultExpanded className=" rounded-lg">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="font-bold text-[16px] flex justify-center items-center gap-3">
            <span className="text-white text-center bg-[#2D9AFF] rounded-[100%] py-1 px-3">
              1
            </span>
            Set up Ads
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MsetUpAds formData={formData} communities={communities} setFormData={setFormData} />
        </AccordionDetails>
      </Accordion>
      <Accordion className=" rounded-lg">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="font-bold text-[16px] flex justify-center items-center gap-3">
            <span className="text-white text-center bg-[#2D9AFF] rounded-[100%] py-1 px-3">
              2
            </span>
            Targetting
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MTargetting formData={formData} setFormData={setFormData}/>
        </AccordionDetails>
      </Accordion>
      <Accordion className=" rounded-lg">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="font-bold text-[16px] flex justify-center items-center gap-3">
            <span className="text-white text-center bg-[#2D9AFF] rounded-[100%] py-1 px-3">
              3
            </span>
            Payment & Review
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Payment formData={formData} setFormData={setFormData} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default CreateAdAcordian;
