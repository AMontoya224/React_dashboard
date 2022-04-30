import logo from './logo.svg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import scholar from './images/scholar.png';
import concytec from './images/concytec.png';
import cv from './images/cv.jpg';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <h1>
        Aqui estara mi Portafolio!!
      </h1>
      <span class="material-icons-round">engineering</span>
      <div className='row'>
        <p>
          Aplicacion desarrollada en React
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <footer>
        <p>
            Desarrollado por <b>Andres Montoya</b>
        </p>
        <div className="row">
          <a className="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank">
            <img className='pagina-logo' src={linkedin} alt='logo linkedin'/>
          </a>
          <a className="pagina" href="https://github.com/AMontoya224" target="_blank">
            <img className='pagina-logo' src={github} alt='logo github'/>
          </a>
          <a className="pagina" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank">
            <img className='pagina-logo' src={scholar} alt='logo scholar'/>
          </a>
          <a className="pagina" href='./images/AMontoya_CV.pdf' target="_blank">
            <img className='pagina-logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABrVBMVEX///////7///3//f/8//////v//v36/////P8Avdf///r9//2zvAH2///y///z8cTEzFv9//YAVX8Avd0AUnlWx84Aw9QAucwAVHoAtcoAv9T5//sCVX4AVYLt/vnL7Pdi0NcAU4S2z9fj9vvU7Oyh5Ofq//8raYIASm/g//8AUXMAUHkAWIHS8/b//+3///IASXgub4G45+v//+atuwAAud0AR2BRgooARmXg8e8AS30AvsiRtLwASXMAWXsAUGyeycy/3N9uoKvT4eauwsjY3469zUm0xC3J0m/n6ar7/Nff44essgChuwDT7tuY29d2293Z3JCpyDNzwctMyMdyysuF1ODx96Di5Ky+yEf1+s/GxVrV+vC3v0eo6+yz5PTZ3ni92s8KVkUAOVpZnLgAPWpUj6DC0U4haGZ7zG8iU1+dwkSt0YWKzt9SzM0os640fYDb4OtYxdlRfI1ylqRFdIkVdY9Hsrib4ryt0qIARFVymS3a1oQ4aopjjKSGsMGKt7hfk42+0dCTqK5ypqhvkJVGi5llpqilt8TJ0Nt9maSszcZsp7VuiI5RioeSfBzXAAAagUlEQVR4nO19iX/bRpZmAXWyEJQN6iAlkLRJQBRP6w5Ni5QIUl4fcY+djaWJc7i3t6e1s5npnrYlTWZmNxYjie6Mnfhv3lcgqcN2b2I5Hg89+PwzDYJAob663vdeVcEIRYgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBE+QJjvOwPvGtSU1LKk8b7z8c5gIoyB5odL0Jm7srQ0975z8a4gsXn7+n+78eDmhTkh33dm3gEoYtfvfARYXr55BdP3nZ1fHxLdWv6oj+WbzgdIEN8GZn1+Hy3fEu87O78+8CcfneCGQwd1aFApMBOYkPebvbeHvHiK4J2lAUGXW0S6FrNGXwPMfX2a4G0qDW0OqRD8q8XFKhF8lKtQczlTg7/5m4wijJqWy/J3p2KxxL38iPdKx3U//Wj5uAL/+2f372/OLFa5PTezGgMktqyRHlhNB4u/Pea3/NEtN1NdnLk8cX/zbiIWIlFl7zuTbwFJxZXPb1y8M2T4YGnOkUxatn1pa0zTmx6LLeL3ncu3AJO3H1z8Qn4yqMMvl7gFqpshy5FfTa3EYmMrKyNMkM1J5/qNW1cMPHfh4o07N248+IIe9zespmLTk1CFieLINlGJLjz48grD0sH4yu3bS7dvfi7lsLo4Wlwdi41Nr864o0pQXPnk61tzlErTlAbGFhW3vl5CQ3eCornL06urEw/5CLZQizLXkhduXL/N+qZQg1K2dPFz6oZfCGdzv72fLxbzbATrz0BYyqWbN764Ik7VjmkgeuHBUl+2YMyrq0XKRpEe2HYqnFsPrlPHpKf8W12Tzs1bDhwSJKzqPy1y13GtkWmgBtRQ2BgpFfiLixcvoJdDTIZ0zC+gFyJmMVq8vziHMR4ZepqgJSWMKNJEVz79+voV+WrjsxzqXPycE+wy9dkMZ6Mlsg0swh6HEVTfF3rsfOUSKh3xxY3bGBzBe5ucuiNUfUhXz5XPP/30C7p0/cH1OUEsYllnLzCoNhfWzU+VQg/v57EYKftgmuj218vLd+78jwc3l3RVQlt15CswHPd3//P3H//dt3mhxEiFu00692UYeblzHblzLoC/DpR2/pBMpprbaMScQIrkhYGefgCSDHDh9bhdG89m0+l1H1k/n+p/IlDk9EODyx8t/6+LX178q/jy78vZdKpSyI0YQUSdz5c1wzvg8V0RTDivg+tcMXfHK+tr2av++87wm8J0lr5e1rHr5f9ddeccFzP6MizTmePVhVLqWrawbb/vDL8pDIPeugP1t/zl33x7T+kZCFBmhhF+gOBk8C9h0m58E/x2YW1922MjFocBUYadCzcf/MM/zuH8HyceugILZGFCTGppcLAImHhPah6yeL2xz9nozaSZ0pm7svjYdYVa/Haz6LhEWC6x7HzeZsyxDMqDhYZyCQxIwbZLRzGUZkjC71cd12XFu98uKgottbo1AT7tVtGxnEx74RJUH0gelF/IMzRyNQjdDXN29y7UjRSi+qfPPIfPrCZisbHpxNRD6S/sK+5o22AxvheMYv2ZpkGQ95hjYiGXkYf/NHMP6E0DQ6D4WSlwwaXXFxKMGo1RM4MDGFglqhTp6mGiOLEy3Q/tTk9PJ6qn22SwjUbMlRiAIj6z5Ya1Ywt8eWUsFhtSvHvi2xKivkHue8zm+SGJLE5ksCaILTU1YDc2FpsemyDH0Quboz8/GtEmihi6X7W0p2Ahb0gwxGN1us4ajREcZQaYuYd1KMJC1cTYCb+xVXXKQTKCGhnJPghjC/buD+oqf5pgbIKfIijUN/mRjBcCmD1R7ceb+ONT/KZn5Cl9LUgtMNHo2foQ7swfHYopo3xxNbYCFmJ6EkbTqeLpTgeWcAOUwWgONNKbUNSk2KL2ZmwMhlA9iK48dE+zMWTQeyVsOiogZOKSKQ3BBVP3EpPayk+tznDBT13DZXEhb4/oOIPNmS02Z2Eg5PDq5dVEIrZZ1UsqjisMM9t/kro628ijURxpDFb8ttivL4cRO+8VHxfFmbrCdu5qNpusFPbyoxS6H8JC/LOHQFMfYsEc6W4uCvtUVRnGpVI8HU+m0/O79iiFRgdwuZz5seUbum7AryBCzGzJ0x3QRO1yPLkWj8fT6/4IEiSmP9tcX29YoSRFxGDVy/R0S2RkJx1PxZOVVLqZG0FTgdFOOZXKlo5Du6w4oc4MJppgPJ5MxdOF3PvI4dsiP5tNprPNYGgFmPvtmXUUHO2ODwiu+6NoC9VeNlWJF3yJUZ+is/XwlIyxpAxKUIVwTXZHOaPXRC2UK2Svzf/zIgdjGDoWzuK9odDmBDsUBWvNZCVbKZWq7gh6TYTZuVpt/9LElmJOOHrS4v0T3wEzNze72FpoNtdrvuXQ0ZrlDYGZdJVpqs3PiiycpRbqpBNKl7QWqggr75JnO5SaI9gJQ06ESj7zbdUilouE83jRNPQiBeQ6vLFQRAJZhsFMsJLGCBrCPqhB7GpiUUmJsDNzl1omgAq7/ee8/ED2TmDMvrr/x7xAWFYniMkM06He9jaXH8bOAkxcShz73kSRUVusZqA7MuntNWzB9IT+BwHDwNidSSySK3iiKmxJq7Ndpd2oEY1VvA4Mo+q3M0r8y7/eWsKX1nMcY/7zd40SuAQpeu+T5d/cufi7f/uty0bQ//sZwNCS+dff6PUJ/8cHsz7SeyT+GuT/7e9duiJHNc70M5CfDHYtyQ+vgYagF+5AFd75BDujtvTgFwI7n95ZXr65hOUHShB4LS0tyRFbnfYGMBGmztwIura/GERvnGAfiD57Dfq24UMRoBH+88AwXnfY//5Xr3xjT8E4m/bLT3oFp7Y0/+y1PwPLIsSyLJ0Daxg6IcTQwYYw9XBU1GuzjDPLz+Hy0/uq+ykYekUecIc0T+dUP4BhggcQQjD4IEJ7y2egEyKD2wRG/Tkb9pbS3TAoNfrAaBg76cfjTSr7Jptwk1Jw1s/eOHwwQccpGCaQpBZjdLjYgnMqZViGervF8aJSovcFWcgdFEwfungYKPVBEcN1YXast4k6Qmkj5fsdH/7CR10nzhAnqpPLbeQCDyGhaQnk+R46HWSx8h7nfadPIO75IXQyHqe61obxNSgF+Eqw7b0Mm2HbVq8g3OYEH7ZX7QMuFeeb29DlhfP7e6XSeB/r6x83OEOUV5+tl+avzV+7tr4TKIaguIP1UmlfseFzLNRaLy0ULQxZsav7C+vJfgrl8fFCzl/Y2dkt6koAajS/u7NX6zxcXU1MARKJxGr/7+oM/WoiMam/DbEK2My7ijL128urq1P9U/DxWIlzrXozpGp83MxmU8k+Kun4bF5S1bhaSumpvWRqPHl1x5MmQY35eLrQthkbdpGFcrLZMkF3eu3fX8vGU6lhIuUn+fVyurCnmAnNTKqdQrL8zaPN2PSUXqkQrvcKt4SuTqDNqdjY9OQJ9M+rVUZNKI7Y2Jg+pa+PTSaqAr8xQYKEUO1CNp3NxgdIptPfZeZU+ypQ1TNDlTU9tTBbhy7QKKfi8WYXDfoW5wvp+HwDIcf/rllJJ+FOfUO8Atc/gepOZ5tHnFlMqv1CpVLIkc2VWGwF0F/ypT8m/4QexybHXkaiStXMSlgSK4NTK9N66d8bCwjLEGq3ma6ksvOF8X4LKyVL+7YLWUrHy83y2uxaM762Fi/veUwTTKXihQaXxzWYAoKkODufTSZLhWa5PGjnhZzD9wvp9HoLYRflCmtr5V1bLk4ldItLhKsx4F9orIvmZb339WwTTUwoewYqFvgNG29sbOpx/hwETWxsNJPjlfJCN6jX6/1Rws84fjOdzs7PNjpwLrc3n05V5vcN2SjDQTxZyhH94iYYhRayyXKDQhOoVLLrOz90/CHq3DLVTjJVqlxyZD0ZT5dnlcV4MRwwHuplUVtf6cMip0AwNrFYPQMlvwLWsenE5sOTk8XzbLA0sVpPxyuFZ/njU4Rwy97OpnWlcT3HaeT3m9lU/BvP1AST0M/WA669PU0w1czJ4GolXVlvKT6w/GA8tV12q+vxeHYvk98pZCsfdywUblkzpNDrvqYu6bXsAhNLE9zSv2kMLKG0N2OxyenHVTv0u/rG8VyGkBi5ZipdbnOHhskQGPXAjhWBUXK2OMcEsV1nju+W03FobZrgWildSa5XiTUk2ELtZrZSaJFwgxYYO6L/QTqgn2um44V2u7yWvtoKBYPLbdtlCggmqo6ltzwRAwhOb4ar9Tl3B3CKCRiGJoqCilP7os7DkMh2dq1SUuGrXoCcaZoW2NYc9LtC68oc2DhIFdPiN+l4aRftA8+12fFkNrvuW0afYLlFZtPp8T2kr9WOkmkO9npCTwVuqWvNZKW0yx1tkaAUBdcEpxOXaFg5BAHByXugA1xtLsM6FMJahI4ZqyJhW9QMNyWY1ss7+H4ZMPounbzWfnlJLlRVZdY7VQ7b49CLOAwy6b38Nowo6e98B3TXQjzV3FCFdLL5ugl4jDLfZZPZ9Fpy1juJAROcmQoJhhOmmuDY2PTlra2ty5ubM64bBsPde2OTKxP2r+A2G9AF1+ZbL6e0Ox5P7x1nyUC0MR6Pr9mN8tr4tuHtjKfT5b26pFwTzHm/Tyf/8OjVtOF+4q+DsYE+CwPMkPWrBFf6JmNlZWzqIda913Avg+24fL46OwurT9B5mWCykq2dirs7rUI8rQmmytuSVWfH48nyTnFIsJBNFl6zPylcKptrJtPlFmLGUHi/SjC2Ot1fxgfmfEs3bmbwy2PTY/fEr1GD9nq61GxJ92xaz8qV8QVFBroaW7RRTsa/A4Lx9DZ30aUSGPXxHYUWUnEgeDW7VvAhq6/xaAxfj2GBVmx/laC2g9P91exTD2lYrEyf/JNw3z40zkCMJMu7jjwr1RvNytq6NzdwnLBE29cqyT2+XwYNRrjDL63H0+nCTnEtmS7kwkawYVqvddn8QjxbCk6deJXgCsiwu9AH/zgzs6j6zoncgjY7adO3X7/HaLtcSV+F8QqdKi0jKCQrhYYcbKqi+NL6tTSMog0whzuIOw4NmqV0uvRxUrc/vlBeyy7Yr5/q/CUEY5Nbpg70mxIcrDAb1sPEZGxsETH5tnVoSJ3V8k7+jI5leaiheOkSlKAuUG5vl7PpqzmzAYJ1z9B7zFDuahzsYSUZH2+h/eZaFuQdfZ2d+gUEddej2txhsDT9ho6Lq4nJ6dWqO/e2BIlU34HHUKhVwbGleuu/nDMRI23wDUqzOW4iIFndLoGXMOsZWmzvEfCc4AoQCKlsOpmab8lqKanFkGcMtl/rhIfvkvELqWz5NEHEBwT7kxd9gpeRBHunZ/b78XDmboVbaKAOB86xFISx80w3MivQsjO9vruRO4YnvfVKJTW+XtvoBMHRN6C/QYq5WmyX98JyNyTPlSpxIHitJXkD3JFKabbdOk4hUIPm/f8jaAwJxhIzZ1GV1SntQKxOzCweo4qM80zISVer/myqVCiBzxu6A1d3bdYCfZm8Nr5eas5nIfdrhV0VEowPzCOVVq4wHhI0WWYHLspmrxWazTIkAZ+/bwyE/2sIopcIjk2f3lQS0zZj1ZYPwXOE3nnyWyKRF2++WZZAI7T3C6X02lpFe3MpvbJzfC0v0Q+FMoyR4CYm19LpZOGJouDwjoMCD6WGdtNRbj6djM+3IJF8bR683JT2ePtO5fg2MkmfYPznahAIgpt7yuMdW0ksumIxMQ1HY33/GDCZWBTuueY8pFpcmL8WOrzAEZprcqHoSB7MNseT4P8mK6nm2r7rIvAHm9n5J8elSHmrcO3aH3KmRShvrBXGT1IoA8GwM1H/42vXSme3YdsZcPUSVdwXz+YWfFs54+7qt5NRLKqXV6GVDiQA2Mqp6jkJOo7Lg/bOwuwxNggGdy+/8eS7ZHO+vLa375s2h+HN25ndCYaqh1BJcrWF3bzE+tBr7e6dpDDb6UfvsR08a+TIGXvG3ZmJiXu26Pcn6m3+aeJlzBBqO9Kubk3cT0yGzXR6cnVreMubghOMHbAFSqmMRl1B8RmSMgMp7QLXXRluwSKC5D375L0NhkmZrWAgZjq26DgWHyQAn4r3BxlMXUSsl+w1owpsQt+ogNXg5KV3VhoWYZYQyAYXg6tBtvJFpt258xBkzNQx2qEOgaZFrX4oeHiFGe7fIVhvID8WlSY8zcXg4hCD6Zggt04pmeP4MLPCt+ucBeGYDWK74GW8IlcYxYZ+mA42Dm+VoESsD2xVSoS3RNhy/mOWSvyHLjjBLrUEk5K50LOo62Jwsk3pSCT1tn84x+CXvnclLIZBYDHuCCkEtfTrjYTjCmE6AhQr/MYFjMamaTjIEZgypqcZiAD1B2kgwyGScORSV2AYuigka1iu9c5fTsbsjnIl93wiYCTDQvB83aaupxSTyLa58nyuo/dWHhNFTJUn0uF1T7k62p6vKoSxkjaI3DzIbxs0qVaYXsbmbiaftw0gaCsfPCF4CKQphC0Ut4TylYsVFvjdv0O2+H2jVndzvaOunakFftf2e+0Gru80NriDDutu8OKoq2CQJLWc3SMo+MZ21NHRi8A9aCHvRfcnGx020KGS1b/3MeoBEyDo1Q5rntU9OuxAwYjqTrctSE/x7e6hbf/5kr+Bii+6L1ze80AT5ex3uraboVwL1T23l0c15W63F7tmZ3sxEPWnix3w5Rt1VOPkqK6tQPtpvs1J97OAd9pIdSgQ7AakBZ9PO0eKtj7bQPaRrfmZ3pFO9rAV1A1o50c++h3jPeU8XQQR195e3ECtHPI93qtT/y9t9Y4XCW/kUOeRDQS/r7vtgx8blhc0djN8O+iIen6/Tp/m0VFH27l20G7LTK29a3WOkPp3JySIWhvk8G57l6vaX3Zs1OubLu8QBc/NxsaBDabfalRR4KpthbdzB8hu5H7cQD8EPKjT3TpvHC1Uwby/y5VuXq1V81Gr3WrbahftdtHBUWvX9hdyOXxwtF1HPxxtHClNsJdvtO3nLfVTXfQ22i0CBDvbrZpnHPobNds/VG0fv2g9VzrNp3drHup2W76eVQ16rVpG9ZT9tJVj9qGqbaDqC7jR3q1navkAnui/yz0Wrhf4hOEOuHS8LryOwH7gYdE5CIQKOjblfpDh4NRj31Ud8cjGXh2rwLeF8BziB1XB6pz7tF6XXh2+d3Qdik7gcVHvdOrgtgsbvjlmx3Y7Bx3X7TCvbnH/3z3MHrnKF7YvDjq/6kIi8KRPyotYFFOMXf3fDkgYNs2+NANJaeo3A+hXqKGhyGLIkqHikuD4gznBYcRegLoUYE/ACoRTpdqUOvC7BULPhaRByFtIOEzHskDBg+kBd55yJC393g8Muk8oZA4Ynsi/E434ZiDEMritFyAQEr7fTnPV8+TG4L82If1ZVWK5jm0dj2+E9M9KClba0PIV69l9yKyOrRGtIcP5EmsQccemDllDSYbJw7BDONES1bBCpW2ANdXBeWJCmVAHE9fq5yYMA4da9rzLLLRvQB1BwwwZOnoYLnvQs2NGf6oeckt1vhn1DiB//ddUCBS6vMIAP4JAjWDIjmHpFVym5EhwBoMEyADU19lg3A4saBsStLmedtOZht9ApSPKhCYMzIbXElO6Od6PdoXBPmpRaA/kfKoK804Aw5cfBIq5uY6CzoDrilmdAyVdMFrI8nK+7Th+rsNlriMtzwubHQ6CjgvPVHXX7vC6Tep1u+M6Khcot14XvnDrjyR015zP7bqN7FY7T0FA8I7lUOHngg6rQwqW6+c8AuftR9TR10JK2odsNRQjmaCTQdw3MYwJ0AB871wKx+IHPW3bgoO61ehuHKL6eh6M2UG71cuQGrQgMLztA9erBb260wik/aztUhMzv3fQgVLF9SNL/ZvX6FiH26qXsXY3jlro+Q+qx/lRTzHvBdxm9zz0vNuqIb7Q8g5ti/DOxlHHfX548EgEL1rfF9FCq95l+hGBCfbQQI1G4xmxv291N+SjHvK2n/d8w+01zrdEk6FuxzGfNBqeXVO8yuo/PmsFqJZHjQ7fBlcx15B+G7UCv+VLIOj/+BcPmrO4VOvmiElQ/chUu+1Wx2r83fO2LZ4i1bPzT6oNzts/duhGC+Uz6JlHejZ65vPd3qVDaDOc+F2EcttdX3YfIU/gp20wDa0cCRoUjDAle9xt1+u79kaQ8XbRQctRXPjdp+pcVYiBiUQ7xbrLa9zuynq3tQcEi6jd4U+hvXQaqNPGrY1qN4caYMZrLzbgLlntgnMPHbZ+RPOHrVoHyB+1uXiBvB4n+23ffl572rByG+TAR4ceaudRz7Of+dsNvZdZJypbrbyg3YBv1HmvutMAgYCChoTCJWgPqd1MvqZabddro991UXCAGk9q59siqwki9H2710GtF72WUW9kdoK5am237Trf/+VZXbXbO56b32nXckACtaGita3w/nzUUDCk1A9F8RABwR/8zk5GdHu1gLlBjaKf8vnvJa+1a3nj0GNBrd1F5Jnd/SEMq/gNk+WeHrWoV2s/s/lPqttl+RfPalXZ2ukFMrezvWHyxu5u23p0hPh2eyevG8ZP5yKIeMa1LJD2IOTtvO264LSAwxMeWrZNiK0UgYZsc9vOZJg+qe+ybKWDYhYHZwr+uCSjZ54ZVwRcIWYQ/U2bEkhG+z+QiM25/h81QsPmWtBOubIZ5hnolHAtPI3nQSu4nMPDleLStVVeOY6iFq/DA2Cg4+dTN8QmYfyFW+HqMRj8OQdzER4SvYezb8n0kjGi7cfxy8/7syQ8DBnh0ARiTo7fgRdeBqaiv9ANY6b73vBFsvoWAVczvcArtJcYDJB+RLgEAcqSU8ooSA4JRiKUs+Hh+apQZ9PC8BdYhaFYOKb9Q/1s2te9mj3S9F5660YYmTqOdlnhy34Hawb7cbNQJQ3t/WkFph86LC6MQoJaCWHtfeifdYtAFj6euWRv/58c9cNog+eG6uEkshbWJ1he8trIFpzVv5snLzE8GwocvoP6RI1YUJ/9B5EQVl/S6KPjvbBYNyarn5hFXnmPcIQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiPBfG/8PCfSjMh5kBysAAAAASUVORK5CYII=' alt='logo cv'/>
          </a>
          <a className="pagina" href='./images/AMontoya_CV.pdf' target="_blank">
            <img className='pagina-logo' src={cv} alt='logo cv'/>
          </a>
          <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank">
            <img className='pagina-logo' src={concytec} alt='logo concytec'/>
          </a>
          <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank">
            <img className='pagina-logo' src={facebook} alt='logo facebook'/>
          </a>
          <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank">
            <img className='pagina-logo' src={youtube} alt='logo youtube'/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
