import { Component } from "react";
import ReactPaginate from 'react-paginate';
import Loader from "react-loader-spinner";
import PokemonDetails from "../PokemonDetails"
import "./index.css"


const appStatusConstants ={
    initial:"INITIAL",
    success:"SUCCESS",
    inProgress:"IN_PROGRESS",
    linkAccess:"LINK_ACCESS",
}

let totalPages = 100000
const limit = 20
const pageCount = totalPages/limit


class Home extends Component{
    state={appStauts:appStatusConstants.initial,requiredData:[],pokemonDetails:[],currentPage:1,offset:0}

    componentDidMount(){
        this.getDetails()
    }


handlePageClick =  (data) =>{
    const {offset} = this.state
    const selectedPage = data.selected    
    this.setState({currentPage:selectedPage,offset:selectedPage * 20})
    this.getDetails()
}


    getDetails = async () =>{
        const{offset} =this.state
        this.setState({appStauts:appStatusConstants.inProgress})             
        const URL =`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
        const response = await fetch(URL)
        const data = await response.json()
        const formattedData = []
            {data.results.map(item =>
                formattedData.push({
                name:item.name,
                url:item.url,
            }))
        }  
        this.setState({requiredData:formattedData})
        
    }

    navigate =async (data) =>{
        const {requiredData} = this.state
        const newData = requiredData.map(item =>item.name)
        if(newData.includes(data)){
            const url=`https://pokeapi.co/api/v2/pokemon/${data}`
            const response = await fetch(url)
            const info = await response.json()
            this.setState({pokemonDetails:info,appStatus:appStatusConstants.linkAccess})            
        }
        
    }


    backButton = () =>{
        {this.successView()}
    }


    linkInfoView = () =>{
        const {pokemonDetails} = this.state
        return(
            <PokemonDetails data={pokemonDetails}/>
        )
    }
    

    successView = () => {
        
        const {requiredData,offset} = this.state
        
        return(           
            <div className="main-container">
                <ul className="pokemon-list">                     
                    {requiredData.map(item=>(
                       <li className="pokemon-list-item" key={item.name}>
                        
                        <button type="button"
                        className="pokemon-button"
                        onClick = {() => this.navigate(item.name)}>                            
                                <p className="pokemon-name">{item.name.toUpperCase()}</p>                           
                        </button>
                
                        </li>
                        
                        
                        ))}
                    
                </ul>  
                <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />              
            </div>
        )
    }


    renderringView= () =>{
        const {appStatus} = this.state
        switch(appStatus){
            
                
            case appStatusConstants.linkAccess:
                return this.linkInfoView()
            default:
                return this.successView()
        }
    } 

    render(){
        const {linkClick} = this.state
        return(
            <>
            {this.renderringView()}
                </>
        )
    }
}

export default Home