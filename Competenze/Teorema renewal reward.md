---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["renewal reward theorem", "renewal-reward process", "processo di rinnovo con ricompensa"]
tags: [competenza, area/probabilita]
---

# Teorema renewal reward

> Il guadagno medio per unità di tempo di lungo periodo è il guadagno medio per ciclo diviso la durata media del ciclo.

## Definizione / enunciato
Sia $\{X_i\}$ un processo di rinnovo con tempi $\{t_\ell\}$ e ricompense $\{r_\ell\}$, dove $r_{\ell+1}$ è data nell'intervallo $[T_\ell,T_{\ell+1})$. Se le coppie $(t_\ell,r_\ell)$ sono i.i.d. si ha un **renewal-reward process**.

**Teorema.** Se $\mathbb E[t_1]>0$ e $\mathbb P(t_1<\infty)=1$ (nel `.tex` anche $\mathbb E|r_1|<\infty$), allora con probabilità 1
$$\lim_{i\to\infty}\frac{R_i}{i}=\frac{\mathbb E[r_1]}{\mathbb E[t_1]},\qquad R_i=\sum_{\ell=1}^{X_i}r_\ell.$$
Le ricompense possono essere discrete (bonus fissi), continue (tempo di funzionamento) o negative (costi).

## Formule chiave
$$\frac{Y(t)}{t}\to\frac{\mathbb E[R_1]}{\mathbb E[\tau_1]}\quad\text{q.c.},\qquad Y(t)=\sum_{n=1}^{N(t)}R_n.$$

## Intuizione
Ciò che conta non è il numero di cicli in un intervallo finito, ma il rapporto di lungo periodo tra ricompensa media del ciclo e durata media del ciclo. Con $r_\ell$ uguale alla durata di una "fase" si ottiene la frazione di tempo spesa in quella fase.

## Come si usa
- Durrett 3.1 (`suggested_exercises_RP.pdf`): periodi piovosi di media 2 giorni e secchi di media 7. La frazione di tempo di pioggia è $\frac{2}{2+7}=\frac29$.
- Durrett 3.7: $\mathbb E[T_i]=17.5$ min e $\mathbb E[R_i]=102$ dollari, quindi $R(t)/t\approx 5.8286$ dollari al minuto.
- Lezione 1-2: una macchina rende 10 €/giorno quando funziona, con guasti dopo 30 giorni in media e riparazioni di 5 giorni in media che costano 50 € + 40 €/giorno. Ciclo medio 35 giorni, ricompensa media $300-50-200=50$ €, quindi circa $50/35\approx1.43$ €/giorno (calcolo dai dati della slide).
- Lezione 2: il ristoratore che sceglie il budget $c_2$ minimizza $g(c_2)=c_2+c_3\,p(c_2)/45$, che è il costo medio giornaliero dato dal teorema.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 1-2 ("Renewal-reward processes"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processi di rinnovo e renewal reward. Fonti principali: `magistrale/Processi stocastici/lezione_01_23_09.pdf` (lezione 1), `magistrale/Processi stocastici/Lezione_02_25_09 (1).pdf` (lezione 2); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processi di rinnovo e renewal reward; `magistrale/Processi stocastici/suggested_exercises_RP.pdf`.

## Prerequisiti
- [[Processo di rinnovo]]: ricompense associate ai cicli di rinnovo

## Porta a
- [[Paradosso dell'ispezione]]: frazione di tempo in intervalli lunghi
- [[Frequenza asintotica per DTMC]]: ritorni come processo di rinnovo
- [[Frequenza asintotica per CTMC]]: tempo in x come ricompensa

## Collegati
- Nessuno.
