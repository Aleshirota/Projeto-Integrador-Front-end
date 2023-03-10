import { extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({
components: {
  Button:{
    variants:{
      header: {
bg: "cinza.500"
      },
      form:{
        width: "100%",
        bg: "cinza.500"
      }
    }
  }
},
colors: {
  cinza:{
    500:"#EDEDED"
  }
  
}

})