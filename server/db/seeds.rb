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
imgs = ["0.jpeg", "1.jpeg","2.jpeg","3.jpeg","4.jpeg", "5.jpeg"]

u = User.create!(
    {first_name: "Виктор", second_name: "Добрянин",  phone_number: "+375337899511",
position_id: 1, email: "admin123@gmail.com", is_chief: true,
       password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
  )
  u.created_at = random_work_exp
    u.avatar.attach(io: File.open(path_to_avatars+imgs[0]), filename: imgs[0],content_type: 'image/jpeg'  )
  u.save
u = User.create!(
        {first_name: "Елена", second_name: "Новикова",  phone_number: "+375295689556",
            position_id: 5, email: "user1@gmail.com",
             password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid })
u.created_at = random_work_exp
u.avatar.attach(io: File.open(path_to_avatars+imgs[3]), filename: imgs[3] ,content_type: 'image/jpeg'  )
u.save

u = User.create!({first_name: "Иван", second_name: "Лапцевич",  phone_number: "+375295789859",
position: Position.last, email: "user2@gmail.com",
 password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid})
u.created_at = random_work_exp
u.avatar.attach(io: File.open(path_to_avatars+imgs[4]), filename: imgs[4],content_type: 'image/jpeg'  )
u.save



  u = User.create!(
    {first_name: "Николай", second_name: "Смирнов",  phone_number: "+375337897544",
position_id: 2, email: "user3@gmail.com",
       password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
  )
  u.created_at = random_work_exp
        u.avatar.attach(io: File.open(path_to_avatars+imgs[1]), filename: imgs[1] ,content_type: 'image/jpeg' )
      u.save

    u = User.create!(
    {first_name: "Дарья", second_name: "Матюкова", phone_number: "+375447891122",
        position_id: 4, email: "user4@gmail.com",
        password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
    )
    u.created_at = random_work_exp
    u.avatar.attach(io: File.open(path_to_avatars+imgs[2]), filename: imgs[2],content_type: 'image/jpeg'  )
    u.save

    u = User.create!(
        {first_name: "Юлия", second_name: "Прокопенко", phone_number: "+375447891122",
            position_id: 7, email: "user5@gmail.com",
            password: "admin123", password_confirmation: "admin123", jti: SecureRandom.uuid}
        )
        u.created_at = random_work_exp
        u.avatar.attach(io: File.open(path_to_avatars+imgs[5]), filename: imgs[5],content_type: 'image/jpeg'  )
        u.save


### TYPES
    Type.create!([
        {name: "Microsoft Office лицензии"}, #1
        {name: "Лицензии Kaspersky"},#2

        {name: "Расводные платы Nordic-32"},#3
        {name: "Программаторы Sim-Link"}, #4
        {name: "Диспели Raspberry"}, #5
        {name: "Одноплатные ПК Orange"},#6

        {name: "Столы с регуляцией высоты"}, #7
        {name: "Увлажнители воздуха"},
        {name: "Звукоизоляционные кабины"},
    ])

    Departament.create!([
        {name: "Отдел ПО"},
        {name: "Отдел микроэлектроники"},
        {name: "Отдел офисной электроники"},
    ])

    ContractType.create!([
        {name: "Продажа"}
      ])
Currency.create!([
                   {name: "EUR"},
                   {name: "BYN"},
                   {name: "USD"}
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

def ramount
  rand(1000..4000)
end

FileUtils.rm_rf Dir.glob("app/assets/doc_files/*")

Document.class_exec{
  after_create :assign_random_created

    private

  def assign_random_created
    self.update(created_at: random_created)
  end

  def random_created
    Time.now-rand(7..20).day
  end

}

###    DOCUMENTS

    rd = random_deadline
     d = Document.create!({
        user_id: 2,  name: "Продажа лицензий",departament_id: 1, type_id: 1,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 2,  name: "Продажа лицензий ",departament_id: 1, type_id: 2,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Внеплановая лицензий",departament_id: 2, type_id: 2,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Продажа Raspberry",departament_id: 2, type_id: 5,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 4,  name: "Продажа увлажнителей",departament_id: 3, type_id: 8,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 2,  name: "Продажа программаторов",departament_id: 2, type_id: 4,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)
    })

rd = random_deadline
    d = Document.create!({
        user_id: 2,  name: "Продажа Raspberry",departament_id: 2, type_id: 5,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

    })

rd = random_deadline
    d = Document.create!({
        user_id: 2,  name: "Продажа Nordic-32",departament_id: 2, type_id: 3,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Продажа кабин",departament_id: 3, type_id: 9,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Продажа кабин",departament_id: 3, type_id: 9,
        status: true, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Продажа программаторов",departament_id: 2, type_id: 4,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 3,  name: "Новые дисплеи",departament_id: 2, type_id: 5,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })








rd = random_deadline
    d = Document.create!({
        user_id: 4,  name: "Продажа Microsoft Office",departament_id: 1, type_id: 1,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 4,  name: "Внеплановая продажа Kaspersky",departament_id: 2, type_id: 2,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 4,   name: "Продажа звукоизоляции",departament_id: 3, type_id: 8,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 4,   name: "Продажа экранов",departament_id: 2, type_id: 5,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 4,  name: "Продажа кабин-без-звука",departament_id: 3, type_id: 9,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 5,   name: "Продажа Sim-Link",departament_id: 2, type_id: 4,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 5,  name: "Новые Дисплеи Raspberry",departament_id: 2, type_id: 5,
        status: false, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 5,  name: "Продажа нескольких программаторов",departament_id: 2, type_id: 4,
        status: true,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 5,   name: "Продажа устаревших увлажнителей",departament_id: 3, type_id: 8,
        status: false, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 6,  name: "Внеплановая продажа",departament_id: 2, type_id: 2,
        status: false, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 6, name: "Продажа Raspberry",departament_id: 2, type_id: 5,
        status: false, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 6,   name: "Продажа Kaspersky несколько",departament_id: 1, type_id: 2,
        status: true, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 6,   name: "Продажа лицензий",departament_id: 1, type_id: 2,
        status: true, deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })

rd = random_deadline
    d = Document.create!({
        user_id: 6,   name: "Продажа Raspberry",departament_id: 2, type_id: 5,
        status: false,  deadline: rd, count: rcount, amount: ramount, execution_deadline: rd+40.days, currency_id: rand(1..3)

                         })
