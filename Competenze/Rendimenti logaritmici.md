---
tipo: competenza
area: finanza
corsi: [Prova finale, Financial engineering]
livello: [triennale, magistrale]
aliases: ["log-returns", "log returns", "rendimenti logaritmici", "rendimento logaritmico", "log-rendimenti", "rendimenti standardizzati", "standardized returns", "stazionarietà dei rendimenti", "code pesanti dei rendimenti", "fat tails", "rendimento lineare", "rendimento semplice", "simple return", "additività dei rendimenti logaritmici"]
tags: [competenza, area/finanza]
---

# Rendimenti logaritmici

> $r_t=\log(P_t/P_{t-1})$: trasformazione dei prezzi che rimuove il trend e rende la serie approssimativamente stazionaria, primo passo prima di stimare le marginali e la copula.

## Definizione / enunciato
Dato il prezzo $P_t$, il rendimento logaritmico è $r_t=\log P_t-\log P_{t-1}$; nella tesi si standardizza poi con media e deviazione standard campionarie:
$$z_t=\frac{r_t-\bar r}{s_r}.$$
In Python: `np.log(filtered_data / filtered_data.shift(1)).dropna()` e `(log_returns - log_returns.mean()) / log_returns.std()` (§4.3).

## Formule chiave
Motivi della stazionarietà elencati nella tesi (§4.3):
1. rimozione del trend crescente dei prezzi;
2. media circa costante, varianza più stabile dei rendimenti lineari (ma con clustering di volatilità, ARCH/GARCH), autocorrelazione che decade rapidamente;
3. test di Dickey-Fuller (ADF) e KPSS di solito confermano la stazionarietà;
4. il moto browniano geometrico implica rendimenti logaritmici stazionari;
5. **additività** nel tempo: $\log(P_T/P_0)=\sum_t r_t$, a differenza dei rendimenti percentuali.

## Intuizione
I prezzi non sono stazionari (hanno trend), i log-rendimenti sì, almeno in prima approssimazione; e le copule richiedono serie stazionarie con marginali stabili (§4.6). Restano però non normali: asimmetria e code più pesanti della gaussiana.

## Come si usa
Dataset della tesi: prezzi Open, High, Low, Close del DAX al minuto dal 02/01/2020 01:15 al 03/03/2022 09:14, 616397 osservazioni (tab. 4.1); dopo la pulizia con IQR restano circa 6000 righe in meno. Risultati:
- correlazioni dei log-rendimenti (subset): Open-Close 0.3141, High-Close 0.5610, Low-Close 0.5142, Open-High 0.4716 (tab. 4.4);
- marginali stimate per MLE e scelte per AIC (§4.4.1): la tesi parla di "rendimenti delle open e delle close", ma il codice lavora su `vol_returns['vol1']`, `['vol2']` e le medie della normale (0.0056, 0.0058) coincidono con le volatilità rolling medie (0.56%, 0.58%): la tab. 4.3 riguarda quasi certamente le volatilità rolling (osservazione mia). Lì la t di Student ($df=1.8257$, AIC $-410122.46$) batte la normale (AIC $-366834.42$) per Open, e lo stesso per Close;
- l'istogramma (fig. 4.2) è a campana con code più pesanti della gaussiana.

## Nei corsi
- **Prova finale** (triennale): cap. 4 "Preparazione dei dati". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.1-4.6, pp. 27-37); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Pulizia Dato.py`; `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/analisiDatiDax.ipynb`.
- **Financial engineering** (magistrale): rendimento lineare $L(s,t)=V(t)/V(s)-1$ e logaritmico $R(s,t)=\ln(V(t)/V(s))$ (def. c02-rendimento-lineare, c02-rendimento-log); **additività** (prop. c02-additivita-log): $R$ si somma nel tempo, $1+L$ si moltiplica; $R\le L$, $R\simeq L$ per rendimenti piccoli. Il rendimento di un portafoglio è la media pesata dei rendimenti **lineari**, non dei logaritmici. Esempio: $100\to110\to99$: $L=+10\%,-10\%$ ma complessivo $-1\%$; $R=9.531\%-10.536\%=-1.005\%=\ln0.99$. Nel GBM i rendimenti logaritmici sono normali i.i.d.; sui dati dell'S&P 500 2019-2024 mostrano code pesanti (curtosi 17.5), asimmetria negativa e volatility clustering; stima annua $\hat\sigma=s_r\sqrt{252}$. Nei capp. 21-22 $L$ indica la perdita $-R$. Fonti: `Libri/Financial engineering/capitoli/cap02.tex`, `cap15.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/06 - lez 27 febbraio - rendimento investimento.pdf`, `22 - lez 13 marzo a - rendimenti e portafoglio.pdf`.

## Prerequisiti
- [[Qualità dei dati]]: pulizia di valori mancanti e outlier prima del calcolo
- [[Media e deviazione standard delle misure]]: standardizzazione dei rendimenti

## Porta a
- [[Volatilità rolling]]: deviazione standard mobile dei log-rendimenti
- [[Pseudo-osservazioni]]: i rendimenti vanno portati in $[0,1]$
- [[Metodo IFM]]: stima parametrica delle marginali

## Collegati
- [[Distribuzione t di Student]]: marginale scelta per AIC
- [[Coefficiente di correlazione]]: matrice di correlazione Open-High-Low-Close
- Modello GARCH (non trattato nei corsi): citato per il clustering di volatilità, senza formule nelle fonti
- [[Moto browniano geometrico]]: rendimenti logaritmici normali e indipendenti (Financial engineering)
- [[QQ-plot]]: verifica della normalità e delle code (Financial engineering)
- [[Capitalizzazione continua]]: $R$ è il tasso continuo equivalente (Financial engineering)
