import { faChartLine , faFileCircleCheck , faBan , faHandshake, faCalculator} from "@fortawesome/free-solid-svg-icons";

export let CardData = [
   {
       title: 'Open permits',
       color: '#42b883',
       icon: faChartLine

   },
   {
       title: 'Open extended',
       color: '#c4c1e0',
       icon: faFileCircleCheck
   },
   {
       title: 'Closed permits',
       color: '#ffcbcb',
       icon: faHandshake
   },
   {
       title: 'Hold permits',
       color: ' #ff7676',
       icon: faBan
   },
   {
       title: 'Rejected permits',
       color: ' #d9b650',
       icon: faFileCircleCheck
   },
   {
       title: 'Total permits',
       color: ' #f98903',
       icon: faCalculator
   }
]
