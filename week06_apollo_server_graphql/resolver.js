const StudentModel = require('./models/Student');
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        students: async () => {
            return await StudentModel.find();
        }
    },
    Mutation: {
        createStudent: async (_, { firstName, lastName, email }) => {
            const student = new StudentModel({ firstName, lastName, email });
            await student.save();
            return student;
        },
        createNewStudent: async (_, { input }) => {
            const student = new StudentModel(input);
            await student.save();
            return student;
        }

    }
};

module.exports = resolvers;