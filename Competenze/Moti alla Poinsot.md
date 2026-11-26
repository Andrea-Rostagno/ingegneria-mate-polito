---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Poinsot motion", "moto per inerzia del corpo rigido", "rotazioni permanenti", "permanent rotations", "giroscopio", "gyroscope", "precessione regolare", "regular precession", "asse giroscopico"]
tags: [competenza, area/fisica]
---

# Moti alla Poinsot

> Moti di un corpo rigido con punto fisso (o rispetto al baricentro) in cui il momento delle forze esterne è nullo: il momento angolare e l'energia cinetica si conservano.

## Definizione / enunciato
**Def. 7.2:** un moto rigido è alla Poinsot se esiste $Q$ fisso, oppure $Q=G$, con $\vec M_Q^{(e)}=\vec 0$ (7.53). Allora $\vec K_Q=I_Q\vec\omega=\text{cost}$ (7.54), ma in generale $\vec\omega$ non è costante, perché $I_Q$ varia nella terna fissa.
**Prop. 7.1:** $T_0=\frac12I_Q\vec\omega\cdot\vec\omega=\frac12\vec K_Q\cdot\vec\omega$ è costante (7.55): è costante la proiezione di $\vec\omega$ su $\vec K_Q$, non $\vec\omega$.
**Def. 7.3 e Thm 7.12:** le **rotazioni permanenti** ($\vec\omega$ costante) si hanno se e solo se la velocità angolare iniziale è parallela a un asse principale (rispetto a $G$): da $\vec\omega\wedge I_Q\vec\omega=\vec 0$ segue $I_Q\vec\omega=\lambda\vec\omega$.

## Formule chiave
**Giroscopio** (Def. 7.4: $I_{G1}=I_{G2}$, asse giroscopico $\hat e_3$). Prop. 7.2:
$$\vec\omega=\frac{\vec K_Q}{I_1}-\alpha\,\omega_{30}\hat e_3,\qquad\alpha=\frac{I_3-I_1}{I_1}\qquad(7.56)$$
con $\omega_3$ costante. Prop. 7.3: tutti i moti alla Poinsot di un giroscopio sono **precessioni regolari**, con asse di precessione parallelo a $\vec K_Q$ e asse di rotazione propria $\hat e_3$.

## Intuizione
Una precessione è un moto sferico in cui $\vec\omega$ sta nel piano di un asse fisso e di un asse solidale, con angolo costante tra i due (Lect1 §2.3, $\vec\omega=\dot\psi\hat\imath_3+\dot\phi\hat e_3$). Esempio del corso: la Terra, schiacciata ai poli, ha $I_1=I_2=0.9966\,I_3$, quindi $\alpha=3.4\cdot10^{-3}$; "alcuni calcoli mostrano che l'asse terrestre scambia l'inverno con l'estate ogni 13.000 anni" (numeri del testo).

## Come si usa
Per riconoscere un moto alla Poinsot si controlla che le forze esterne abbiano momento nullo rispetto al punto fisso o a $G$ (per esempio, un corpo pesante sospeso nel baricentro). Poi si usano le due costanti $\vec K_Q$ e $T_0$, oppure le equazioni di Eulero con secondo membro nullo.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 75-76; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 25-26, precessione).

## Prerequisiti
- [[Equazioni di Eulero]]: caso con momento esterno nullo
- [[Momento angolare del corpo rigido]]: K_Q costante

## Porta a
- Nessuno.

## Collegati
- [[Tensore d'inerzia]]: rotazioni permanenti attorno agli assi principali
- [[Autovalori e autovettori]]: I_Q ω = λ ω
- [[Integrali primi del moto]]: K_Q e T_0 sono integrali primi
- [[Angoli di Eulero]]: la precessione regolare in termini di ψ' e φ'
