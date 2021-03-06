import Document, {Html,Head,Main,NextScript} from 'next/document'; //importando html f
export default class MyDocument extends Document{
  render(){
    return(
      <Html>
<Head>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;600&display=swap"/>
    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
</Head>   
          <body>
            <Main/>
            <NextScript/>
        </body>
      </Html>
    )
  }
}