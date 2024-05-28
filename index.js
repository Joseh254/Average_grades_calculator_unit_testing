// function to grade sciences subjects
function grade_sciences(science_grades){
    if (science_grades >= 70 && science_grades<= 100) return ('A')
    if (science_grades>=60 && science_grades<= 69) return ('B')
    if (science_grades>=50 && science_grades<= 59) return ('C')  
    if (science_grades>=40 && science_grades<= 49) return ('Pass') 
    if (science_grades<=39 ) return ('Sup') 
    
}

// function to grade religious education subjects
function grade_religious_education(re_grades){
    if(re_grades >= 80 && re_grades <=100) return("A")
    if(re_grades >= 70 && re_grades <=79) return("B")
    if(re_grades >= 60 && re_grades <=69) return("C")
    if(re_grades >= 50 && re_grades <=59) return("Pass")
    if(re_grades < 50 ) return("Sup")

}

// function to grade langeages grades
function grade_languages(languages_grades){
    if(languages_grades >=75 && languages_grades <=100) return ('A')
    if(languages_grades >=65 && languages_grades <=74) return ('B')
    if(languages_grades >=55 && languages_grades <=64) return ('C') 
    if(languages_grades >=45 && languages_grades <=54) return ('Pass')
    if(languages_grades <45 ) return ('Sup')      
}