import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";


// const languages = [
//   {
//     name: "C",
//     year: 1972
//   },
//   {
//     name: "C#",
//     year: 2000
//   },
//   {
//     name: "C++",
//     year: 1983
//   },
//   {
//     name: "Clojure",
//     year: 2007
//   },
//   {
//     name: "Elm",
//     year: 2012
//   },
//   {
//     name: "Go",
//     year: 2009
//   },
//   {
//     name: "Haskell",
//     year: 1990
//   },
//   {
//     name: "Java",
//     year: 1995
//   },
//   {
//     name: "Javascript",
//     year: 1995
//   },
//   {
//     name: "Perl",
//     year: 1987
//   },
//   {
//     name: "PHP",
//     year: 1995
//   },
//   {
//     name: "Python",
//     year: 1991
//   },
//   {
//     name: "Ruby",
//     year: 1995
//   },
//   {
//     name: "Scala",
//     year: 2003
//   }
// ];

// function escapeRegexCharacters(str) {
//   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }

// function getSuggestions(value) {
//   const escapedValue = escapeRegexCharacters(value.trim());

//   if (escapedValue === "") {
//     return [];
//   }

//   const regex = new RegExp("^" + escapedValue, "i");

//   return languages.filter(language => regex.test(language.name));
// }

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

const shouldRenderSuggestions = value => {
  return true;
};

function renderSuggestion(suggestion, { query }) {
  const matches = AutosuggestHighlightMatch(suggestion.name, query);
  const parts = AutosuggestHighlightParse(suggestion.name, matches);

  const population = `${suggestion.population}`;

  return (
    <span style = {{fontSize: population.length > 0 ? population.length + 16 : 'null'}}>
      {parts.map((part, index) => {
        const className = part.highlight
          ? "react-autosuggest__suggestion-match"
          : null;

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        );
      })}
    </span>
  );
}

class SearchUI extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      planets: []
    };
  }

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/planets").then(res => {
  //     this.setState(
  //       {
  //         planets: res.data.results
  //       },
  //       () => {
  //         console.log(res.data.results);
  //       }
  //     );
  //   });
  // }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

 onSuggestionsFetchRequested = ({ value }) => {
    fetch(`https://swapi.co/api/planets?search=${value}`)
      .then(response => response.json())
      .then(data => this.setState({ suggestions: data.results }))
  }


  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Planets...",
      value,
      onChange: this.onChange
    };
    return (
      <div className="innerGrid">
        <h1>Search</h1>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          shouldRenderSuggestions={shouldRenderSuggestions}
        />
      </div>
    );
  }
}

export default SearchUI;
