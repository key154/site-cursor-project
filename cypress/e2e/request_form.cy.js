// Тесты формы заявки на сайте "Ща всё будет"
// Запуск: npx cypress run --e2e --spec cypress/e2e/request_form.cy.js

describe('Форма заявки', () => {
  const url = 'http://localhost:5173/'; // если порт другой — поменяй

  const tests = [
    {
      name: 'Иван', phone: '+7 952 744 58 58', email: 'test@mail.ru', comment: 'Хочу вывеску', agree: true, shouldPass: true, desc: 'Валидный мобильный РФ, валидный email',
    },
    {
      name: 'А', phone: '222-22-22', email: '', comment: '', agree: true, shouldPass: true, desc: 'Минимальное имя, короткий городской',
    },
    {
      name: '', phone: '+7 952 744 58 58', email: '', comment: '', agree: true, shouldPass: false, desc: 'Нет имени',
    },
    {
      name: 'Иван', phone: '123', email: '', comment: '', agree: true, shouldPass: false, desc: 'Телефон слишком короткий',
    },
    {
      name: 'Иван', phone: '2-22-22', email: '', comment: '', agree: true, shouldPass: true, desc: 'Минимально допустимый городской',
    },
    {
      name: 'Иван', phone: '+7 952 744 58 58', email: 'not-an-email', comment: '', agree: true, shouldPass: true, desc: 'Email невалидный, но не обязателен',
    },
    {
      name: 'Иван', phone: '+7 952 744 58 58', email: '', comment: '', agree: false, shouldPass: false, desc: 'Нет согласия',
    },
    {
      name: 'Иван', phone: '8 912 345-67-89', email: '', comment: '', agree: true, shouldPass: true, desc: 'Мобильный РФ через 8',
    },
    {
      name: 'Иван', phone: '35-67-89', email: '', comment: '', agree: true, shouldPass: true, desc: 'Короткий городской, 6 цифр',
    },
    {
      name: 'Иван', phone: '+7 952 744 58 58', email: '', comment: '', agree: true, shouldPass: true, desc: 'Валидный мобильный, пустой email',
    },
  ];

  beforeEach(() => {
    cy.visit(url);
    cy.contains('Оставить заявку').click();
  });

  tests.forEach((t, i) => {
    it(`${i + 1}. ${t.desc}`, () => {
      if (t.name) cy.get('input[placeholder="Ваше имя"]').clear().type(t.name);
      else cy.get('input[placeholder="Ваше имя"]').clear();
      cy.get('input[placeholder="Телефон"]').clear().type(t.phone);
      cy.get('input[placeholder^="E-mail"]').clear().type(t.email);
      cy.get('textarea[placeholder="Комментарий"]').clear().type(t.comment);
      if (t.agree) cy.get('input[type="checkbox"]').check({ force: true });
      else cy.get('input[type="checkbox"]').uncheck({ force: true });
      cy.get('button[type="submit"]').click();
      if (t.shouldPass) {
        cy.contains('Спасибо! Мы свяжемся с вами', { timeout: 5000 }).should('exist');
        cy.reload();
      } else {
        cy.get('.form-success').should('not.exist');
        cy.get('form').should('exist');
      }
    });
  });
}); 