const database = require("./db");
const createProffy = require('./createProffy');

database.then(async (db) => {
    //inserção de dados
    proffyValue = {
        name: "Mayk Brito",
        avatar: "url",
        whatsapp: "123456789",
        bio: "Intrutor",
    }

    classValue = {
        subject: "1",
        cost: 20,
        // o proffy_id vem pelo db, é a relação
    }

    classScheduleValues = [
        //class_id mesdma coisa, vem pelo db deps que cadastramos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1200
        },
        {
            weekday: 4,
            time_from: 620,
            time_to: 1100
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)

    // consultar as classes de um proffy e trazer junto os seus dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `)
    console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, p.e., 8 - 18h
    // time_from precisa ser menor ou igual ao solicitado e time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "5"
    `)
})