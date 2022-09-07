require('./connection')

const Exercise = require('../models/Exercise')

const exercise = [
    {
        name: 'Side-lying Shoulder Sweeps',
        video: 'https://youtu.be/fnttFXC2Bnk',
        cues: '- squeeze fist in between knees - aim for hand to touch the floor for the full range of motion - arm staying straight'        
    },
    {
        name: 'Hip Openers',
        video: 'https://youtu.be/CZ9dE3XZC-0',
        cues: '- without lifting forward leg - raise back knee as high as you can towards the ceiling'        
    },
    {
        name: '90/90 Hip Transitions',
        video: 'https://youtu.be/TGzO3pQuklo',
        cues: '- try to keep knees as far apart as possible while staying upright'        
    },
    {
        name: '90/90 Hip Lift',
        video: 'https://youtube.com/shorts/__X37Fq7I8E',
        cues: '- act as if feet are glued to the wall and you are trying to pull them down'        
    },
    {
        name: 'Hollow Body Hold',
        video: 'https://youtu.be/N6qpoy5vr6Y',
        cues: '- start with knees over hips, then gradually straighten them to increase difficulty - low back should stay rounded into the ground'        
    },
    {
        name: 'Goblet Squat',
        video: 'https://youtu.be/1BMJQmWclvo',
        cues: '- let knees go forward - butt down - while staying as upright as possible'        
    },
    {
        name: 'Single-arm Bench Press',
        video: 'https://youtu.be/yH3GurKIsFA',
        cues: '- use other hand as needed to guide dumbbell down - elbow/arm should make an arrow shape with your body, not a "T"'        
    },
    {
        name: 'Machine Leg Extension',
        video: 'https://youtu.be/qk04uz_oR6o',
        cues: 'avoid arching through back - legs should be almost locked out at the top'        
    },
    {
        name: 'Dumbbell Incline Squeeze Press',
        video: 'https://youtu.be/LTONLIx-AVM',
        cues: '- keep wrists neutral while squeezing dumbbells together for the duration of movement'        
    },
    {
        name: 'Bicep Curls',
        video: 'https://youtu.be/zM844FaSXNo',
        cues: '- palms face you at the top - try to keep elbows tight to body '        
    },
    {
        name: 'Banded Leg Drop',
        video: 'https://youtu.be/vQeQyo_Cbnc',
        cues: '- only go as low as you can keep your low back rounded into the floor - static leg should stay at hip level'        
    },
    {
        name: 'RFOW Single-leg Deadlift',
        video: 'https://youtu.be/HuAiAunmBSs',
        cues: '- sound on for cues'        
    },
    {
        name: 'Dumbbell Bench Row',
        video: 'https://youtube.com/shorts/7Jfvcu6acvE',
        cues: '- drive elbows towards your back pocket - wrist stays relaxed and neutral - back flat - straight arm should be actively pushing you away from the bench/not sagging into shoulder blade'        
    },
    {
        name: 'Lying Leg Curl',
        video: 'https://youtu.be/Yr5uSu9JMSE',
        cues: '- try to avoid arching through back'        
    },
    {
        name: 'Shoulder Protraction to Lat Pulldown',
        video: 'https://youtu.be/kwkCvjW7bYM',
        cues: '- pull shoulders down with straight arms first, then pull bar to the top of your chest'        
    },
    {
        name: 'Cable Tricep Extension',
        video: 'https://youtu.be/njZO3hmKYLY',
        cues: '- keeping wrists straight, pull rope apart at hips - keep elbows tucked in at sides'        
    },
    {
        name: 'Cable Tricep Extension',
        video: 'https://youtu.be/njZO3hmKYLY',
        cues: '- keeping wrists straight, pull rope apart at hips - keep elbows tucked in at sides'        
    },
    {
        name: 'Tall Kneeling Swimmers',
        video: 'https://youtu.be/vyjLMi2YoVM',
        cues: '- arms will go as far back as you can without raising chest/arching through back'        
    },
    {
        name: 'Wall Assisted Adductor Rockback w/ T-spine Rotation + Reach',
        video: 'https://youtu.be/VFNbvsOphwQ',
        cues: ''        
    },
    {
        name: 'Lateral Lunge',
        video: 'https://youtu.be/zVC4RJ4Ceo8',
        cues: '- act as if sitting back into a chair - knee and toes should be facing straight ahead on both legs'        
    },
    {
        name: 'Half-kneeling Dumbbell Overhead Press',
        video: 'https://youtu.be/6dUYZixbbZM',
        cues: '- press weight straight overhead - avoid arching through back or lifting chest'        
    },
    {
        name: 'Foam Roll Deadbug ISO',
        video: 'https://youtu.be/81pDLkcO6lc',
        cues: '- squish foam roller between fully lengthened arms and bent knees - back should be rounded into the floor'        
    },
    {
        name: 'Standing Lateral Raises',
        video: 'https://youtube.com/shorts/Z8tEGK27Gck',
        cues: '- with slight bend of elbow, raise arms to just above shoulder level'        
    },
    {
        name: 'Dumbbell Step-ups',
        video: 'https://youtu.be/B0HCrmRNyc8',
        cues: '- pick a manageable height where you dont have to push off your back foot - control on the way down'        
    },
    {
        name: 'Modified Side Plank ISO',
        video: 'https://youtu.be/AeSzyepGWvM',
        cues: '- keep elbow underneath your shoulder and shoulder far away from your ear - use top leg to support yourself as needed'        
    },
    {
        name: 'Foam Roll Deadbug',
        video: 'https://youtu.be/YypiW9tnAuk',
        cues: '- keeping foam roller still, alternate extending legs'        
    },
    {
        name: 'Split Squat',
        video: 'https://youtu.be/US7HOgsqy4A',
        cues: '- sound on for cues'        
    },
    {
        name: 'Flat Dumbbell Bench Press',
        video: 'https://youtu.be/ez5Ai-ISgHA',
        cues: '- arms and elbows should form a arrow shape with your body, not a "T"'        
    },
    {
        name: 'Sled Leg Press Machine',
        video: 'https://youtu.be/QAJV8GdMqZ4',
        cues: '- feet will be your squat stance or just outside hip width apart - keep pressure equally through your whole foot as you go through the movement - back stays planted into seat'        
    },
    {
        name: 'Lying Dumbbell Chest Fly',
        video: 'https://youtu.be/Jr8mGj7_kQ8',
        cues: '- slight bend of elbows - arms stay in line with chest'        
    },
    {
        name: 'Incline Hammer Curls',
        video: 'https://youtu.be/SbSnwmPcXd8',
        cues: '- palms stay facing each other'        
    },
    {
        name: 'Wall Press Heel Taps',
        video: 'https://youtu.be/Mwk37tzfpaM',
        cues: '- sound on for cues'        
    },
    {
        name: 'Dumbbell RDL',
        video: 'https://youtu.be/HFMMjG1tbf8',
        cues: '- sound on for cues'        
    },
    {
        name: 'Cable Seated Row',
        video: 'https://youtu.be/XDrOjGB0dNQ',
        cues: '- slight bend of knees, staying upright - only moving through arms and shoulder blades'        
    },
    {
        name: 'Single-leg Bench Bridge',
        video: 'https://youtu.be/TluTGhM-ORs',
        cues: '- bridge through hips, not back - chest stays relaxed'        
    },
    {
        name: 'Lying Dumbbell Pullovers',
        video: 'https://youtube.com/shorts/y9aTFS65owU',
        cues: '- keep low back pressed into floor - arms go straight overhead as far as you can control'        
    },
    {
        name: 'Deadbug Tricep Extensions',
        video: 'https://youtube.com/shorts/5LQV2rlTc0k',
        cues: '- back stays flat, should feel abs engaged - only straightening and bending elbow'        
    },
    {
        name: 'Heel Clicks',
        video: 'https://youtube.com/shorts/0irYeIio9gs',
        cues: '- reach butt back and arms forward - back stays flat'        
    },
    {
        name: 'Hip Hinge w/ Reach',
        video: 'https://youtube.com/shorts/tnkXfuaeycM?feature=share',
        cues: '- back stays flat, should feel abs engaged - only straightening and bending elbow'        
    },
    {
        name: 'Plank to Down Dog',
        video: 'https://youtu.be/czjs8nV2kDk',
        cues: '- reach long through the arms (pushing yourself away from the ground)'        
    },
    {
        name: 'Lateral Step-up',
        video: 'https://youtu.be/ooVLgaFE6F4',
        cues: '- keep body shifted into woking leg - choose a manageable box height that allows you to control yourself down'        
    },
    {
        name: 'Seated Arnold Press',
        video: 'https://youtu.be/gyaRtQ4-C2A',
        cues: '- palms face you at the bottom and out at the top'        
    },
    {
        name: 'Suitcase March in Place',
        video: 'https://youtu.be/B4y8hZCKiFk',
        cues: '- stay tall and stacked through hips and ribs - exhale to get abs engaged before you start and fight to keep them as you switch legs - the heavier the weight the more challenging'        
    },
    {
        name: 'Assisted Single-leg RDL',
        video: 'https://youtube.com/shorts/yg3yTd51gNA?feature=share',
        cues: '- reach hips backwards while keeping back flat and weight close to your body'        
    },
    {
        name: 'Barbell Bent-over Row (pronated)',
        video: 'https://youtu.be/-nfssCpG9FQ',
        cues: '- hinge back into hips - back flat - should feel glutes and hamstrings holding you up'        
    },
    {
        name: 'Forearm Plank',
        video: 'https://youtu.be/moz2IbXbhzk',
        cues: '- sound on for cues'        
    },
    {
        name: 'Tall Kneeling Alternating Lateral/Front Raise',
        video: 'https://youtu.be/5Im7DNvfoLo',
        cues: '- arms go just above shoulder level - alternate reaching forward and lateral'        
    },
   
]

// new model exerciseGroup containing array of exercise id's for exercises saved, can make another group for week 1, 2. etc
// nested relationship is one way, save id's inside of group and what they correspond to in the database
// create form with dropdown to collect id's

Exercise.deleteMany({})
    .then(() => {
    return Exercise.insertMany(exercise)
    })
    .then((exercise) => {
    console.log(exercise)
    })
    .catch((err) => {
    console.log(err)
    })
    .finally(() => {
    process.exit()
})