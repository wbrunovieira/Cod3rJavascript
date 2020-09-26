import {setImmediate} from 'timers';

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 *3 * * 6', function (){
    console.log('Executando tarefa1 !', new Date().getSeconds())
}) //each 5 mins every sundays

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
},20000)

const regra  = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range( 1, 5 )]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2 ! ', new Date ().getSeconds())
})