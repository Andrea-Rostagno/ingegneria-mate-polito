---
tipo: competenza
area: numerica
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Euler-Maruyama method, schema di Euler-Maruyama, Euler-Maruyama scheme, convergenza forte di uno schema, ordine forte, ordine debole, schema esatto del GBM, simulazione di SDE]
tags: [competenza, area/numerica]
---

# Metodo di Euler-Maruyama

> Il metodo di Eulero esplicito per le SDE: ogni passo aggiunge drift per $h$ e diffusione per un incremento gaussiano $\sqrt h\,Z$; converge con ordine forte 1/2 e debole 1.

## Definizione / enunciato
SDE $dS_t=\mu(t,S_t)dt+\sigma(t,S_t)dW_t$, griglia $t_i=ih$, $h=T/N$, $Z_i$ i.i.d. $\mathcal N(0,1)$ (def. c18-euler-maruyama):
$$S_{i+1}=S_i+\mu(t_i,S_i)\,h+\sigma(t_i,S_i)\sqrt h\,Z_{i+1}.$$
**Convergenza** (def. c18-convergenza): forte se $\mathbb E[\sup_n|S_{t_n}-S_n|]=O(h^{q_s})$; debole (per $\varphi$) se $\sup_n|\mathbb E\varphi(S_{t_n})-\mathbb E\varphi(S_n)|=O(h^{q_w})$.
**Ordini** (prop. c18-ordini, enunciato): con coefficienti lipschitziani come nel teorema di esistenza e unicità, $q_s=\frac12$; con coefficienti e $\varphi$ regolari, $q_w=1$; per $\varphi$ lipschitziana $q_w\ge q_s$.

**Schema esatto del GBM** (prop. c18-schema-esatto): $\hat S_{t_{i+1}}=\hat S_{t_i}\exp\{(\mu-\frac12\sigma^2)\Delta t_i+\sigma\sqrt{\Delta t_i}Z_{i+1}\}$ ha la stessa legge congiunta del GBM sulla griglia, e coincide q.c. se si usano gli stessi incrementi.

## Formule chiave
Errore debole sulla media del GBM, esatto: $\mathbb E[S_N]=S_0(1+rh)^{T/h}$ e $e_h=\frac12r^2TS_0e^{rT}h+O(h^2)$.

## Intuizione
Il punto sinistro è quello dell'integrale di Itô (adattamento). Lo schema trascura il termine $\frac12\sigma^2S(\Delta W^2-h)$ che la formula di Itô contiene. Non conserva le proprietà della soluzione: per il GBM può dare prezzi negativi con passi grandi; per il CIR può portare $X<0$ e rendere $\sqrt X$ indefinita.

## Come si usa
Esempi del libro: un passo con $S_0=100$, $r=5\%$, $\sigma=20\%$, $h=0.01$, $Z_1=0.5$: $S_1=101.05$ contro l'esatto $101.035$. Errore debole sulla media con $S_0=100$, $r=5\%$, $T=1$: costante $0.1314$, cioè $0.0131$ per $h=0.1$ e $0.00131$ per $h=0.01$ (indipendente da $\sigma$).

## Nei corsi
- **Financial engineering** (magistrale): cap. 18 §§Dal metodo di Eulero a Euler-Maruyama, Convergenza forte e debole, Simulazione esatta del GBM. Fonti: `Libri/Financial engineering/capitoli/cap18.tex`; dispensa `magistrale/Financial engineering/esercitazioni/Discretizzazione SDEs e metodo Monte Carlo.pdf` (T. Vanzan).
- **Ottimizzazione in condizione di incertezza** (magistrale): chiamato "Euler scheme", $\delta S_t=a(S_t,t)\,\delta t+b(S_t,t)\sqrt{\delta t}\,\epsilon$ con $\epsilon\sim N(0,1)$; per il browniano con drift è esatto, per il GBM produce marginali normali invece che lognormali: esempio di **errore di discretizzazione**, distinto dall'errore di campionamento. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 6, 10, 23).

## Prerequisiti
- [[Metodo di Eulero esplicito]]: versione deterministica
- [[Equazione differenziale stocastica]]: equazione da discretizzare
- [[Integrale di Itô]]: punto sinistro

## Porta a
- [[Metodo Monte Carlo]]: simulazione delle traiettorie per il prezzo
- [[Opzione asiatica]]: traiettorie con osservazioni discrete

## Collegati
- [[Moto browniano geometrico]]: schema esatto
- [[Processo di Ornstein-Uhlenbeck]]: schema esatto gaussiano
- [[Modello CIR]]: problema dei valori negativi
- [[Esistenza e unicità per SDE]]: ipotesi per gli ordini di convergenza
