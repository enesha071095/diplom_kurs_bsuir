class Document < ApplicationRecord
    belongs_to :user
    belongs_to :type
    belongs_to :departament
    belongs_to :contract_type, required: false
    belongs_to :currency
    has_one :signature, required: false

    has_one_attached :file

    validates_associated :user
    validates_presence_of :user
    validates :name, :deadline, :amount, :count, presence: true
    validates_inclusion_of :status, in: [true, false]

    before_create :assign_contract_type

    after_create :create_attached

    private

    def assign_contract_type
        self.contract_type_id = 1 if self.contract_type_id.blank?
    end

    def create_attached
        path_to_files = "#{Rails.root}/app/assets/doc_files/"
        content_type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

        create_signature
        generate_docx
        self.file.attach(io: File.open(path_to_files+"example" + self.id.to_s+".docx" ), filename: "#{self.id}.docx", content_type: content_type  )
    end

    def create_signature
        Signature.create({
           document_id: self.id
         })
    end

    def generate_docx
        path_to_files = "#{Rails.root}/app/assets/doc_files/"

            PureDocx.create(path_to_files+"example" + self.id.to_s+".docx", paginate_pages: 'right') do |doc|

                doc.content([
                    doc.text("Договор №#{self.id} - #{self.contract_type.name}", size: 48, align: 'center')
                ])

                doc.content([
                    doc.text("\"#{self.name}\"",  size:32, align: 'center'),
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text("г. Минск, ул. Бровки, 6", size: 26, align: 'right'),
                    doc.text("От #{self.created_at.to_date.to_s}", size: 26, align: 'right'),
                    doc.text(" ", size: 26, align: 'left'),
                ])


                first_part = "Общество с ограниченной ответственностью \"DoCommerce\", именуемое
                в дальнейшем \"Продавец\", в лице торгового агента \"В.С. Добрянина\", действующего на основании Устава,
                с одной стороны, и представитель корпоративного партнера в лице #{self.user.first_name} #{self.user.second_name} (#{self.user.position.name}), действующего на основании Устава,
                в дальнейшем именуемого \"Покупатель\", с другой стороны, совместно именуемые в дальнейшем \"Стороны\", заключили
                настоящий договор (далее по тексту - Договор) о нижеследующем:
                "

                    doc.content([
                    doc.text(first_part,size: 26)
                ])

                    doc.content([
                        doc.text(" ", size: 26, align: 'left'),
                    doc.text("Содержание договора",style: [:bold, :italic],size: 26, align: 'center'),
                    doc.text(" ", size: 26, align: 'left'),
                ])

                    second_part1 = "
                    \t1. #{self.departament.name} от стороны \"Продавца\" обязуется предоставить для продажи #{self.type.name} в кол-ве #{self.count}
                    не позднее срока исполнения: #{self.execution_deadline.to_s}.
                    \n

                    "

                    second_part2="	\t2. \"Покупатель\" обязуется купить у \"Продавца\" #{self.type.name} в кол-ве #{self.count}
                    не позднее срока исполнения: #{self.execution_deadline.to_s} за сумму #{self.amount.to_s} (валюта: #{self.currency.name}). "

                    doc.content([
                        doc.text(" ", size: 26, align: 'left'),
                    doc.text(second_part1, size: 26, align: 'left'),
                    doc.text(second_part2, size: 26, align: 'left'),
                ])


                doc.content([
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text(" ", size: 26, align: 'left'),
                    doc.text("Договор заверен ООО \"DoCommerce\", токен подписи \"DoCommerce\": #{self.signature.token}", size: 20, align: 'right'),
                ])

                end

    end

end
