# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  ### POSITIONS

Position.create!([
    {name: "Торговый агент"},
  {name: "Агент закупок компании \"БелВеб\""},
  {name: "Директор компании \"Октавиа\""},
  {name: "Директор компании \"СанШайн\""},
  {name: "Агент закупок компании \"ТехМир\""},
  {name: "Зам. директора компании \"Виктория\""},
  {name: "Начальник отдела закупок компании \"АленМоторс\""},
  {name: "Агент закупок компании \"БелАвиа\""},
  {name: "Начальник отдела закупок компании \"Амунра\""},
  {name: "Агент закупок компании \"ТоргБел\""}
  ])


  ### USERS
def random_work_exp
    Time.now-rand(6..20).month
end
path_to_avatars = "#{Rails.root}/app/assets/images/avatars/"
imgs = ["0.jpg", "1.jpg","2.jpg","3.jpg","4.jpg", "5.jpg"]

u = User.create!(
    {first_name: "Аркадий", second_name: "Ермоленко",  phone_number: "+375337899511",
position_id: 1, email: "admin123@gmail.com", is_chief: true, 
       password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
  )
  u.created_at = random_work_exp
    u.avatar.attach(io: File.open(path_to_avatars+imgs[0]), filename: imgs[0],content_type: 'image/jpeg'  )
  u.save
u = User.create!(
        {first_name: "Елена", second_name: "Иванова",  phone_number: "+375295689556",
            position_id: 5, email: "user1@gmail.com",
             password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid })
u.created_at = random_work_exp
u.avatar.attach(io: File.open(path_to_avatars+imgs[3]), filename: imgs[3] ,content_type: 'image/jpeg'  )
u.save

u = User.create!({first_name: "Иван", second_name: "Осташко",  phone_number: "+375295789859",
position: Position.last, email: "user2@gmail.com",
 password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid})
u.created_at = random_work_exp
u.avatar.attach(io: File.open(path_to_avatars+imgs[4]), filename: imgs[4],content_type: 'image/jpeg'  )
u.save



  u = User.create!(
    {first_name: "Николай", second_name: "Трошко",  phone_number: "+375337897544",
position_id: 2, email: "user3@gmail.com",
       password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
  )
  u.created_at = random_work_exp
        u.avatar.attach(io: File.open(path_to_avatars+imgs[1]), filename: imgs[1] ,content_type: 'image/jpeg' )
      u.save

    u = User.create!(
    {first_name: "Дарья", second_name: "Синкевич", phone_number: "+375447891122",
        position_id: 4, email: "user4@gmail.com", 
        password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
    )
    u.created_at = random_work_exp
    u.avatar.attach(io: File.open(path_to_avatars+imgs[2]), filename: imgs[2],content_type: 'image/jpeg'  )
    u.save

    u = User.create!(
        {first_name: "Юлия", second_name: "Астафьева", phone_number: "+375447891122",
            position_id: 7, email: "user5@gmail.com", 
            password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
        )
        u.created_at = random_work_exp
        u.avatar.attach(io: File.open(path_to_avatars+imgs[5]), filename: imgs[5],content_type: 'image/jpeg'  )
        u.save


### TYPES 
    Type.create!([
        {name: "Офисные стулья"}, #1
        {name: "Офисные столы"},#2

        {name: "Портативные зарядные устройства"},#3
        {name: "Компьютеры"}, #4
        {name: "Мониторы"}, #5
        {name: "Принтеры"},#6

        {name: "Доски для презентации"}, #7
        {name: "Бумага А4"}, 
        {name: "Канцелярские наборы"}, 
    ])

    Departament.create!([
        {name: "Отдел мебели"},
        {name: "Отдел электроники"},
        {name: "Отдел канцелярии"},
    ])

### DEPARTAMENTS
def random_deadline
    Date.today + rand(-4..13).days
end
def filename(i)
    "Документ_#{i}.docx"
end

def rcount
    rand(60..300)
end

path_to_files = "#{Rails.root}/app/assets/doc_files/"
content_type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

def random_created
    Time.now-rand(7..20).day
end

###    DOCUMENTS
     d = Document.create!({
        user_id: 2,  name: "Продажа стульев",departament_id: 1, type_id: 1,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 2,  name: "Продажа столов",departament_id: 1, type_id: 2,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Внеплановая продажа",departament_id: 2, type_id: 2,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Продажа принтеров",departament_id: 2, type_id: 5,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 4,  name: "Продажа бумаги по частям",departament_id: 3, type_id: 8,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 2,  name: "Продажа нескольких ПК",departament_id: 2, type_id: 4,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 2,  name: "Продажа устаревших мониторов",departament_id: 2, type_id: 5,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 2,  name: "Продажа китайских PB",departament_id: 2, type_id: 3,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Продажа вскрытых канц-наборов",departament_id: 3, type_id: 9,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Продажа новых канц-наборов",departament_id: 3, type_id: 9,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Продажа ПК",departament_id: 2, type_id: 4,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 3,  name: "Новые мониторы",departament_id: 2, type_id: 5,
        status: true,  deadline: random_deadline, count: rcount
    })







    
    d = Document.create!({
        user_id: 4,  name: "Продажа стульев",departament_id: 1, type_id: 1,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 4,  name: "Внеплановая продажа",departament_id: 2, type_id: 2,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 4,   name: "Продажа бумаги по частям",departament_id: 3, type_id: 8,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 4,   name: "Продажа устаревших мониторов",departament_id: 2, type_id: 5,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 4,  name: "Продажа вскрытых канц-наборов",departament_id: 3, type_id: 9,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 5,   name: "Продажа ПК",departament_id: 2, type_id: 4,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 5,  name: "Новые мониторы",departament_id: 2, type_id: 5,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 5,  name: "Продажа нескольких ПК",departament_id: 2, type_id: 4,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 5,   name: "Продажа бумаги по частям",departament_id: 3, type_id: 8,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 6,  name: "Внеплановая продажа",departament_id: 2, type_id: 2,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 6, name: "Продажа принтеров",departament_id: 2, type_id: 5,
        status: false,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 6,   name: "Продажа столов",departament_id: 1, type_id: 2,
        status: true,  deadline:random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 6,   name: "Продажа столов",departament_id: 1, type_id: 2,
        status: true,  deadline: random_deadline, count: rcount
    })

    d = Document.create!({
        user_id: 6,   name: "Продажа принтеров",departament_id: 2, type_id: 5,
        status: false,  deadline: random_deadline, count: rcount
    })