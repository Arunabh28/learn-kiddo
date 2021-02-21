import questionModel from './MathQuestionModel'

export default{
    numberOfQuestions:Number,
    questions:Array<questionModel>=[],
    viewed:Number,
    currentQuestion:questionModel
}