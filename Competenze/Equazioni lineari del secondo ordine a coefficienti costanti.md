---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["second-order linear ODE with constant coefficients", "equazione caratteristica di una EDO", "equazione omogenea associata", "principio di sovrapposizione per EDO lineari"]
tags: [competenza, area/analisi]
---

# Equazioni lineari del secondo ordine a coefficienti costanti

> L'equazione $u''=au'+bu+f(t)$ si risolve con l'equazione caratteristica per l'omogenea e sommando una soluzione particolare dell'equazione completa.

## Definizione / enunciato
**Omogenea** (Lussardi, teor. 5.2.2). Siano $a,b\in\mathbb R$ e $\lambda_1,\lambda_2\in\mathbb C$ le soluzioni dell'**equazione caratteristica** $\lambda^2=a\lambda+b$. L'integrale generale di $u''=au'+bu$ è:
- (a) $\lambda_1\ne\lambda_2$ reali: $u(t)=c_1e^{\lambda_1t}+c_2e^{\lambda_2t}$;
- (b) $\lambda_1=\lambda_2=\lambda$: $u(t)=c_1e^{\lambda t}+c_2te^{\lambda t}$;
- (c) $\lambda_{1,2}=\alpha\pm i\beta\notin\mathbb R$: $u(t)=c_1e^{\alpha t}\cos(\beta t)+c_2e^{\alpha t}\sin(\beta t)$,

con $c_1,c_2\in\mathbb R$; ogni problema di Cauchy $u(t_0)=u_0$, $u'(t_0)=u_1$ ha una e una sola soluzione su $\mathbb R$.

**Completa** (teor. 5.2.3). Se $f:I\to\mathbb R$ è continua e $v$ è una soluzione di $v''=av'+bv+f$, l'integrale generale di $u''=au'+bu+f$ è $u=u_0+v$, con $u_0$ integrale generale dell'omogenea. **Principio di sovrapposizione** (Morandotti, teor. 6.1.20): se $f=f_1+f_2$, una soluzione particolare è la somma delle particolari per $f_1$ e $f_2$.

## Formule chiave
$$\text{integrale generale}=\underbrace{c_1y_1+c_2y_2}_{\text{omogenea}}+\underbrace{v}_{\text{particolare}}$$

## Intuizione
Si cercano soluzioni esponenziali $e^{\lambda t}$: sostituendo si ottiene l'equazione caratteristica. Radici complesse coniugate danno oscillazioni ($\cos$, $\sin$) smorzate o amplificate da $e^{\alpha t}$; una radice doppia richiede la seconda soluzione $te^{\lambda t}$.

## Come si usa
(1) equazione caratteristica e omogenea; (2) soluzione particolare con il metodo di somiglianza (o di variazione delle costanti, Morandotti §6.1.5); (3) somma; (4) condizioni iniziali per $c_1,c_2$. Morandotti scrive l'equazione come $y''+a_1y'+a_2y=f$ con polinomio caratteristico $\lambda^2+a_1\lambda+a_2$ (teor. 6.1.16): attenzione ai segni rispetto alla forma di Lussardi. Esercizi tipo: esercitazione 27 (2021-22, "ODE di II ordine") e `Svolgimento esercizi integrali impropri e ODE di II ordine.pdf`.

## Nei corsi
- **Analisi 1** (triennale): "equazioni differenziali lineari del secondo ordine a coefficienti costanti; integrale generale dell'omogenea; principio di sovrapposizione; integrale generale dell'equazione completa". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (def. 5.2.1, teor. 5.2.2-5.2.3, pp. 85-87); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 6.1.16, 6.1.20, PDF pp. 253, 262).

## Prerequisiti
- [[Problema di Cauchy]]: due condizioni iniziali
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: radici complesse danno seni e coseni

## Porta a
- [[Metodo di somiglianza]]: fornisce la soluzione particolare

## Collegati
- [[Equazioni differenziali lineari del primo ordine]]: stessa struttura omogenea + particolare
- [[Moto armonico semplice]]: in Fisica 1 l'equazione $\ddot x+\omega^2x=0$ dell'oscillatore armonico (molla, pendoli)
