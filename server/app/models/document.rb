class Document < ApplicationRecord
    belongs_to :user
    belongs_to :type
    belongs_to :departament

    has_one_attached :file

    validates_associated :user
    validates_presence_of :user
    validates :name, :deadline, presence: true
    validates_inclusion_of :status, in: [true, false]


    after_create :create_attached

    private

    def random_created
        Time.now-rand(7..20).day
    end

    def create_attached
        path_to_files = "#{Rails.root}/app/assets/doc_files/"
        content_type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

        generate_docx
        self.file.attach(io: File.open(path_to_files+"example" + self.id.to_s+".docx" ), filename: "#{self.id}.docx", content_type: content_type  )
        
        self.created_at = random_created
        self.save

    end

    def generate_docx
        path_to_files = "#{Rails.root}/app/assets/doc_files/"

            PureDocx.create(path_to_files+"example" + self.id.to_s+".docx", paginate_pages: 'right') do |doc|

                doc.content([
                    doc.text("Договор №#{self.id}", size: 48, align: 'center')
                ])
                
                doc.content([
                    doc.text("\"#{self.name}\"",  size:32, align: 'center'),
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text("г. Минск", size: 26, align: 'right'),
                    doc.text("От #{self.created_at.to_date.to_s}", size: 26, align: 'right'),
                    doc.text(" ", size: 26, align: 'left'),
                ])


                first_part = "Общество с ограниченной ответственностью \"Contsign\", именуемое
                в дальнейшем \"Продавец\", в лице торгового агента \"А.С. Ермоленко\", действующего на основании Устава, 
                с одной стороны, и представитель корпоративного партнера в лице #{self.user.first_name} #{self.user.second_name} (#{self.user.position.name}), действующего на основании Устава,
                в дальнейшем именуемого \"Покупатель\", с другой стороны, совместно именуемые в дальнейшем \"Стороны\", заключили 
                настоящий договор (далее по тексту - Договор) о нижеследующем:
                "

                    doc.content([
                    doc.text(first_part,size: 26)
                ])

                    doc.content([
                        doc.text(" ", size: 26, align: 'left'),
                    doc.text("Предмет договора",style: [:bold, :italic],size: 26, align: 'center'),
                    doc.text(" ", size: 26, align: 'left'),
                ])

                    second_part1 = "
                    \t1. #{self.departament.name} от стороны \"Продавца\" обязуется предоставить для продажи #{self.type.name} в кол-ве #{self.count}
                    не позднее #{self.deadline.to_s}. 
                    \n

                    "

                    second_part2="	\t2. \"Покупатель\" обязуется купить у \"Продавца\" #{self.type.name} в кол-ве #{self.count}
                    не позднее #{self.deadline.to_s}. "

                    doc.content([
                        doc.text(" ", size: 26, align: 'left'),
                    doc.text(second_part1, size: 26, align: 'left'),
                    doc.text(second_part2, size: 26, align: 'left'),
                ])


                doc.content([
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text("Договор заверен ООО \"Contsign\"", size: 20, align: 'right'),
                ])

                end

               

    end

end