function Footer(){
    let listArray=[
        'FAQ','Investor Relations','Privacy','Speed Test',
        'Help Center','Jobs','Cookie Preference','Legal Notices',
        'Account','Ways to Watch','Corporate Information','Only on Netflix',
        'Media Center','Terms of Use','Contact Us'
    ]
    return(<footer>
       <p className="p1">Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
       <p className="p2">Questions? Contact us.</p>
       <ul className="footerRow">
           {listArray.map(data=>
                <li key={data}><span>{data}</span></li>
           )}
       </ul>
       <div className="btnLanguage"><span>🌐</span>&nbsp;&nbsp;
       <select name="optLanguage">
          <option value="eng">English</option>
          <option value="hn">Hindi</option>
       </select>
       </div>
    </footer>)
}

export default Footer