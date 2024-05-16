"use strict";

const users = {
    id:["woorimIT","나개발","김팀장","dk21"],
    psword:["1234","1234","123456","dk21"],
};

const output = {
    home:(req,res)=>{
        res.render("home/index");
    },
    
    login :(req,res)=>{
        res.render("home/login");
    },
};

const process = {
    login :(req, res) => {
        console.log('process=>', req.body)
        const id = req.body.id,
            psword = req.body.psword;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                console.log(idx, psword);
                return res.json({
                    success: true,
                    message: "Login success!!"
                });

            }
            return res.json({
                success: false,
                message: "Password를 다시입력하십시오.",
            })
        }
        return res.json({
            success: false,
            message: "일치하는 ID가 없습니다.",
        })
        
    },
};

module.exports={
    output, process,
}