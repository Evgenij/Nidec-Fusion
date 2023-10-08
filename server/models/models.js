const sequelize = require('../db')
const {DataType, DataTypes} = require('sequelize')

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	surname: {
		type: DataTypes.STRING,
		allowNull: false
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
})

const Workshift = sequelize.define('workshift', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
})

const Role = sequelize.define('role', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
})

const Skill = sequelize.define('skill', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
})

const UserSkill = sequelize.define('user_skill', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	status: {
		type: DataTypes.BOOLEAN,
		default: false
	},
})

const Workplace = sequelize.define('workplace', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.BOOLEAN,
		default: true
	},
})

// 1:1
User.hasOne(Role)
Role.belongsTo(User)

Workshift.hasMany(User) // 1:M
User.belongsTo(Workshift) // M:1

Skill.hasMany(UserSkill)
UserSkill.belongsTo()