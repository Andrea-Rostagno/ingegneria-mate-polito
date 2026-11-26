---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Vasicek model, Vasicek, modello di Vasicek a due fattori, two-factor Vasicek, prezzo affine dello ZCB, affine term structure, tassi negativi]
tags: [competenza, area/finanza]
---

# Modello di Vasicek

> Tasso a breve Ornstein-Uhlenbeck: $dr_t=\kappa(\theta-r_t)dt+\sigma dW_t$; prezzo degli ZCB in forma chiusa affine, con il difetto dei tassi negativi.

## Definizione / enunciato
Sotto $\mathbb Q$: $dr_t=\kappa(\theta-r_t)dt+\sigma\,dW^{\mathbb Q}_t$, con $\kappa$ velocità di ritorno e $\theta$ media di lungo periodo. Legge: $r_t\mid r_s\sim\mathcal N\big(\theta+(r_s-\theta)e^{-\kappa(t-s)},\frac{\sigma^2}{2\kappa}(1-e^{-2\kappa(t-s)})\big)$.

**Teorema** (teo. c20-vasicek-zcb), $\tau=T-t$:
$$B(t,T)=e^{A(\tau)-B_V(\tau)r_t},\qquad B_V(\tau)=\frac{1-e^{-\kappa\tau}}{\kappa},$$
$$A(\tau)=\Big(\theta-\frac{\sigma^2}{2\kappa^2}\Big)\big(B_V(\tau)-\tau\big)-\frac{\sigma^2}{4\kappa}B_V(\tau)^2,\qquad y_\infty=\theta-\frac{\sigma^2}{2\kappa^2}.$$
Si dimostra sostituendo la forma affine nella PDE dello ZCB.

**Due fattori** (prop. c20-vasicek-due-fattori, enunciato): $r=x_1+x_2$, due OU correlati ($\rho$), premio per il rischio affine ($\hat k_i$, $\hat\theta_i$); $P(t,T)=e^{A(\tau)-B_1(\tau)x_1-B_2(\tau)x_2}$ con $B_i=\frac{1-e^{-\hat k_i\tau}}{\hat k_i}$ e
$$y_\infty=\sum_i\Big(\hat\theta_i-\frac{\sigma_i^2}{2\hat k_i^2}\Big)-\frac{\rho\sigma_1\sigma_2}{\hat k_1\hat k_2}.$$

## Formule chiave
Rendimento affine: $y(t,T)=\frac{B_V(\tau)r_t-A(\tau)}{\tau}$.

## Intuizione
Gaussiano e con ritorno alla media: semplice e trattabile, ma assegna probabilità positiva ai tassi negativi. Errore classico: $\sigma^2/(2\kappa)$ (varianza stazionaria) al posto di $\sigma^2/(2\kappa^2)$ nel termine di convessità; controllo dimensionale: $A$ deve essere un numero puro. Con due fattori correlati negativamente si ottengono curve a gobba; la calibrazione usa il filtro di Kalman (cenno, articolo di Troiani).

## Come si usa
Esempi del libro: $\kappa=0.5$, $\theta=4\%$, $\sigma=1.5\%$, $r_0=1\%$: $B_V(5)=1.83583$, $A(5)=-0.125522$, $B(0,5)=0.8660$, $y(0,5)=2.878\%$ (con $r_0=4\%$: 3.979%, con $r_0=7\%$: 5.081%), $y_\infty=3.955\%$. Stessi parametri: $\mathbb P(r_1<0)=N(-1.827)=0.0338$, contro $0.0038$ nello stato stazionario.

## Nei corsi
- **Financial engineering** (magistrale): cap. 20 §§Il modello di Vasicek, Il Vasicek a due fattori; cap. 14 es. c14-vasicek. Fonti: `Libri/Financial engineering/capitoli/cap20.tex`; `magistrale/Financial engineering/onofrio/A. Troiani - Il modello di Vasicek a 2 fattori - 20170410 (1).pdf`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf`.

## Prerequisiti
- [[Processo di Ornstein-Uhlenbeck]]: dinamica del tasso
- [[Modello per il tasso a breve]]: PDE dello ZCB

## Collegati
- [[Modello CIR]]: alternativa con tassi positivi
- [[Struttura a termine dei tassi]]: curve crescenti, invertite, a gobba
- [[Integrale di Wiener]]: tasso e suo integrale gaussiani
- [[SDE lineari]]: soluzione esplicita
