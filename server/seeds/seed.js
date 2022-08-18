const db = require("../config/connection");
const { User } = require("../models");
const { Skill } = require("../models");
const { Booktime } = require("../models");
const userSeeds = require("./userSeeds.json");
const skillSeeds = require("./skillSeeds.json");
const bookTimeSeeds = require("./bookTimeSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Skill.deleteMany({});
    await Booktime.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < skillSeeds.length; i++) {
      const { _id, teacher, students } = await Skill.create(skillSeeds[i]);
      const userTeacher = await User.findOneAndUpdate(
        { _id: teacher },
        {
          $addToSet: {
            teachSkill: _id,
          },
        }
      );
      students.forEach(async (student) => {
        const userStudnet = await User.findOneAndUpdate(
          { _id: student },
          {
            $addToSet: {
              learnSkill: _id,
            },
          }
        );
      });
    }
    for (let i = 0; i < bookTimeSeeds.length; i++) {
      const { _id } = await Booktime.create(bookTimeSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});

// const connection = require("../config/connection");
// const { User, Skill } = require("../models");
// const {
//   getRandomName,
//   getRandomEmail,
//   getRandomSkill,
//   getRandomPassword,
//   getRandomLocation,
//   getRandomAge,
// } = require("./data");

// connection.on("error", (err) => err);

// connection.once("open", async () => {
//   console.log("connected");
//   await User.deleteMany({});
//   await Skill.deleteMany({});

//   const users = [];
//   const skills = [];

//   for (let i = 0; i < 20; i++) {
//     skills.push({
//       name: getRandomSkill(),
//       teacher: getRandomName(),
//       students: getRandomName(),
//     });
//   }
//   await Skill.collection.insertMany(skills);

//   for (let i = 0; i < 20; i++) {
//     const username = getRandomName();
//     const age = getRandomAge();
//     const password = getRandomPassword();
//     const email = getRandomEmail();
//     const location = getRandomLocation();

//     users.push({
//       username,
//       password,
//       age,
//       email,
//       location,
//       skills: skills[i]._id,
//     });
//   }

//   await User.collection.insertMany(users);

//   // loop through the saved videos, for each video we need to generate a video response and insert the video responses
//   console.table(users);
//   console.table(skills);
//   console.info("Seeding complete! 🌱");
//   process.exit(0);
// });

///
