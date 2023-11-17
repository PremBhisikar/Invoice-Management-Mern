const config = {
    local : {
            
    },
    staging : {
        DB : {
            HOST : "127.0.0.1",
            PORT : "27017",
            DBNAME : "Mongoprg",
            MONGOOSE:{
                useUnifinedTopology: true,
                useNewUrlParser: true
            },
            USERNAME : "",
            PASSWORD : ""
        },
        port_no : 3456,
        Email : {
            host : "smtp.gmail.com",
            port : 465,
            user : "azmsiddhant1@gmail.com",
            password : "khghxqhczbsezjtd"
        }
    },
    production : {

    }
}
export const get =  (env) => {
    return config[env];
}